import AsyncStorage from "@react-native-async-storage/async-storage";
import { authConstants } from "../constants";

// const getToken = async () => {
//     try {
//       const jsonValue = await AsyncStorage.getItem('@vibla/auth')
//       const data = JSON.parse(jsonValue)
//     //   console.log(data)
//       return data !== null ? true : false;
//     } catch(error) {
//     // error reading value
//       console.log(error);
//     }
// }

// const jsonValue = AsyncStorage.getItem('@vibla/auth')

// console.log(jsonValue.then(res => res));

const initialState = {
    loadingAuth: false,
    successAuth: false,
    errorAuth: false,
    myData: false,
    isAuth: null
}

export const authReducer= (state = initialState, action) => {
    switch (action.type) {
        case authConstants.AUTH_REQUEST:
            return {
                ...state,
                loadingAuth: true,
                successAuth: false,
                errorAuth: false,
            }
        case authConstants.AUTH_SUCCESS:
            return {
                ...state,
                myData: action.payload,
                loadingAuth: false,
                successAuth: true,
                errorAuth: false,
            }

        case authConstants.AUTH_FAIL:
            return {
                ...state,
                loadingAuth: false,
                successAuth: false,
                errorAuth: action.payload,
            }

        case authConstants.CLEAN_AUTH:
            return {
                ...state,
                loadingAuth: false,
                successAuth: false,
                errorAuth: false,
            }

        case authConstants.LOGOUT:
            return {
                ...state,
                isAuth: action.payload
            }

        default:
            return state;
    }
}