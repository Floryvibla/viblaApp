import useSWR from "swr"
import { getToken } from "../../utils/functions"
import { postsConstants } from "../constants"
import { postsService } from "../services"




export const postsActions = {
    createPost,
    LoadPosts,
    loadTypePost,
    cleanCreatePost,
    likePost
}

function createPost(dataUser: any) {
    return dispatch => {
        dispatch({
            type: postsConstants.CREATE_POST_REQUEST
        })

        postsService.createPost(dataUser)
        .then(response => {
            dispatch({
                type: postsConstants.CREATE_POST_SUCCESS,
                payload: response.data
            })
            // console.log(response.data);
        })
        .catch(error => {
            dispatch({
                type: postsConstants.CREATE_POST_FAIL,
                payload: error
            })
            console.log(error);
        })

    }
}

function loadTypePost() {
    return dispatch => {

        postsService.getTypesPost()
        .then(response => {
            const data = []
            response.data.data.map(item => {
                data.push({
                    id: item.id,
                    ...item.attributes
                })
            })

            dispatch({
                type: postsConstants.LOAD_TYPES_POST,
                payload: data
            })
            // console.log(data);
        })
        .catch(error => {
            console.log(error);
        })

    }
}

function cleanCreatePost() {
    return dispatch => {
        dispatch({
            type: postsConstants.CLEAN_CREATE_POST
        })

    }
}

function LoadPosts() {
    // console.log("Queee");
    const { data, error, mutate } = useSWR(`/posts?populate=*`, async () => {
        const response = await postsService.loadPosts()
        const data = await response.data
    
        return data.data
  
    }, {
        revalidateOnMount: true
    })
  
    return {dataPost: data, error, mutate }
}

function likePost(dataUser) {
    return dispatch => {
        // dispatch({
        //     type: postsConstants.CREATE_POST_REQUEST
        // })

        // console.log(dataUser);

        postsService.likePost(dataUser)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        })

    }
}