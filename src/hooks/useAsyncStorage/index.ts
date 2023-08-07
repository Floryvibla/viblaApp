import { useEffect, useState } from "react";
import { Share } from "react-native";
import * as Clipboard from 'expo-clipboard';
import { UserDTO } from "../../dtos/userDtos";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storageKeys } from "../../Constants/localStorage";

export function useAsyncStorage() {

    const [dataUserStorage, setDataUserStorage] = useState<UserDTO>({})
    
    

    useEffect(() => {

        const getDataStorage = async () => {
            const jsonValue = await AsyncStorage.getItem(storageKeys.auth)
            const data = JSON.parse(jsonValue)
    
            setDataUserStorage(data ?? {})
        }

        getDataStorage()
    }, [])
    
    
    return {
        dataUserStorage
    }
}