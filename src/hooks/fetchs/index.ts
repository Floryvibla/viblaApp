import { useEffect, useState } from "react";
import { useAsyncStorage } from "../useAsyncStorage";
import HttpInterno from "../../config/http";

export interface InitialStateFetchProps {
    loading?: boolean;
    success?: boolean;
    error?: any;
    data?: any;
}

export interface PostFetchProps {
    data?: any;
    url?: string
}

export const initialStateFetch: InitialStateFetchProps = {
    loading: null,
    data: null,
    error: null,
    success: null
}

const httpInterno= HttpInterno()


export function useFetch() {

    const [ dataFetch, setDataFetch ] = useState<InitialStateFetchProps>(initialStateFetch)

    const { dataUserStorage: { token } } = useAsyncStorage()

    const updateDataFetch = (dataUpdate: InitialStateFetchProps) => {
        setDataFetch(prev => ({
            ...prev,
            ...dataUpdate,
        }))
    }
    
    async function postFetch({ data, url }: PostFetchProps) {
        const header = token && {headers: {"Authorization" : `Bearer ${token}`}}
        updateDataFetch({ loading: true, error: false, success: false })
        httpInterno.post(`/${url}`, {data}, header)
        .then(response => {

            console.log("response: ", response.data);
            updateDataFetch({ loading: false, data: response.data, success: true })
        })
        .catch((err) => {
            updateDataFetch({ loading: false, success: false, error: err.response.data.message })
            console.log("Error: ", err.response.data);
        }) 
    }

    async function postFetchwithHeader({ data, url }: PostFetchProps) {
        updateDataFetch({ loading: true, error: false, success: false })
        httpInterno.post(`/${url}`, data)
        .then(response => {
            console.log("response: ", response.data);
            updateDataFetch({ loading: false, data: response.data, success: true })
        })
        .catch((err) => {
            updateDataFetch({ loading: false, success: false, error: err.response.data.message })
            console.log("Error: ", err.response.data);
        }) 
    }

    async function getFetch({ data, url }: PostFetchProps) {
        const headers = {"Authorization" : `Bearer ${token}`}
        updateDataFetch({ loading: true, error: false, success: false, data: null })
        httpInterno.get(`/${url}`, token && { headers })
        .then(response => {
            // console.log("response: ", response.data);
            updateDataFetch({ loading: false, data: response.data, success: true })
        })
        .catch((err) => {
            updateDataFetch({ loading: false, success: false, error: err.response.data.message })
            console.log("Error: ", err.response.data);
        })
    }

    
    return {
        dataFetch,
        postFetch,
        getFetch,
        postFetchwithHeader
    }
}