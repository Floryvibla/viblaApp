import AsyncStorage from "@react-native-async-storage/async-storage"
import { Alert } from "react-native"
import { codeInvitationConstants } from "../constants"
import { codeInvitationService } from "../services"
import { storageKeys } from "../../Constants/localStorage"


export const codeInvitationActions = {
    getCodeInvitation,
}

function getCodeInvitation (){
    return dispatch => {
      dispatch({ 
      type: codeInvitationConstants.GET_CODEINVITATION_REQUEST
    })
  
    codeInvitationService.getCodeInvitation()
      .then(response => {
        dispatch({ 
          type: codeInvitationConstants.GET_CODEINVITATION_SUCCESS,
          payload: response.data
        })
        console.log(response.data);
      })
      .catch(error => {
        dispatch({ 
          type: codeInvitationConstants.GET_CODEINVITATION_FAIL
        })
        console.log("error: ", error.message);
      })
    }
}

