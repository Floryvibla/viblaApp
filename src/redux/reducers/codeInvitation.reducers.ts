import { authConstants, codeInvitationConstants } from "../constants";


const initialState = {
    loadingCodeInvitation: false,
    successCodeInvitation: false,
    errorCodeInvitation: false,
    dataCodeInvite: false,
}

export const codeInvitationReducer= (state = initialState, action) => {
    switch (action.type) {
        case codeInvitationConstants.GET_CODEINVITATION_REQUEST:
            return {
                ...state,
                loadingCodeInvitation: true,
                successCodeInvitation: false,
                errorCodeInvitation: false,
            }
        case codeInvitationConstants.GET_CODEINVITATION_SUCCESS:
            return {
                ...state,
                dataCodeInvite: action.payload,
                loadingCodeInvitation: false,
                successCodeInvitation: true,
                errorCodeInvitation: false,
            }

        case codeInvitationConstants.GET_CODEINVITATION_FAIL:
            return {
                ...state,
                loadingCodeInvitation: false,
                successCodeInvitation: false,
                errorCodeInvitation: action.payload,
            }

        default:
            return state;
    }
}