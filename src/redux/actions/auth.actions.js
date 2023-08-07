import AsyncStorage from "@react-native-async-storage/async-storage"
import { Alert } from "react-native"
import { useSelector } from "react-redux"
import useSWR from "swr"
import { authConstants } from "../constants"
import { authService } from "../services"


export const authActions = {
  auth,
  getMe,
  getUserById,
  logout,
  GetMe,
  cleanAuth
}

function getUserById (id){
    return dispatch => {
      dispatch({ 
      type: authConstants.LOAD_USER_BY_ID_REQUEST
    })
  
    authService.getUserById(id)
      .then(response => {
        dispatch({ 
          type: authConstants.LOAD_USER_BY_ID_SUCCESS,
          payload: response.data
        })
        console.log(response.data);
      })
      .catch(error => {
        dispatch({ 
          type: authConstants.LOAD_USER_BY_ID_FAIL
        })
        console.log(error);
      })
    }
}

function auth(userData) {
    return dispatch => {
        dispatch({
            type: authConstants.AUTH_REQUEST
        })

        authService.auth(userData)
        .then( res => {
          console.log("Successfully authenticated: ", res.data);
            authService.getMe(res?.data?.jwt)
            .then(async response => {
                const data = {...response.data, token: res.data.jwt}
                dispatch({
                    type: authConstants.AUTH_SUCCESS,
                    payload: data
                })
                const jsonValue = JSON.stringify(data)
                await AsyncStorage.setItem('@vibla/auth', jsonValue)

                dispatch({ 
                    type: authConstants.LOGOUT,
                    payload: true
                })

                dispatch({
                    type: authConstants.CLEAN_AUTH
                })
            })
            .catch(error => {
                dispatch({
                    type: authConstants.AUTH_FAIL,
                    payload: error
                })
                console.log(error.response.data.error);
            })
        })
        .catch(error => {
            if (error.response.data.error.message === "Invalid identifier or password") {
                Alert.alert("", "Identificador ou senha inválida")
            }
            dispatch({
                type: authConstants.AUTH_FAIL,
                payload: error
            })
            console.log("error: ", error);
        })

    }
}

function GetMe(token) {

    const { isAuth } = useSelector(state => state.auth)

    // console.log(isAuth.token);
    
    const { data, error, mutate } = useSWR(`/users/me?populate=*`, async () => {
        // authService.getMe(token)
        // .then(response => {
        //     console.log(response.data);
        // })
        // .catch(err => console.log(err))
        try {
            const response = await authService.getMe(token)
            const data = await response.data
        
            return data 
        } catch (error) {
            console.log(error);
        }
  
    })
  
    return {data, error, mutate }
}

function getMe (){
    return dispatch => {
      dispatch({ 
      type: authConstants.LOAD_ME_REQUEST
    })
  
    authService.getMe()
      .then(response => {
        dispatch({ 
          type: authConstants.LOAD_ME_SUCCESS,
          payload: response.data
        })
        console.log(response.data);
      })
      .catch(error => {
        dispatch({ 
          type: authConstants.LOAD_ME_FAIL
        })
        console.log(error);
      })
    }
}

function logout (state){
    return async dispatch => {
        !state && await AsyncStorage.removeItem('@vibla/auth')
        dispatch({ 
            type: authConstants.LOGOUT,
            payload: state ?? false
        })
    }
}

function cleanAuth (){
  return async dispatch => {
    dispatch({ type: authConstants.CLEAN_AUTH })
  }
}