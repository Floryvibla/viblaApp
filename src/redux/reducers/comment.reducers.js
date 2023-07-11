import { commentConstants } from "../constants";


const initialState = {
    loadingCreateComment: false,
    successCreateComment: false,
    errorCreateComment: false,
    comment: false,

    loadingRepliesComment: false,
    successRepliesComment: false,
    errorRepliesComment: false,
    repliesComment: false,
}

export const commentReducer= (state = initialState, action) => {
    switch (action.type) {

        case commentConstants.CREATE_COMMENT_REQUEST:
            return {
                ...state,
                loadingCreateComment: true,
                successCreateComment: false,
                errorCreateComment: false,
            }
        case commentConstants.CREATE_COMMENT_SUCCESS:
            return {
                ...state,
                comment: action.payload,
                loadingCreateComment: false,
                successCreateComment: true,
                errorCreateComment: false,
            }

        case commentConstants.CREATE_COMMENT_FAIL:
            return {
                ...state,
                loadingCreateComment: false,
                successCreateComment: false,
                errorCreateComment: true,
            }

        case commentConstants.CLEAN_CREATE_COMMENT:
            return {
                ...state,
                loadingCreateComment: false,
                successCreateComment: false,
                errorCreateComment: false,
                comment: false
            }

        case commentConstants.LOAD_REPLIES_BY_COMMENT_REQUEST:
            return {
                ...state,
                loadingRepliesComment: true,
                successRepliesComment: false,
                errorRepliesComment: false,
            }
        case commentConstants.LOAD_REPLIES_BY_COMMENT_SUCCESS:
            return {
                ...state,
                repliesComment: action.payload,
                loadingRepliesComment: false,
                successRepliesComment: true,
                errorRepliesComment: false,
            }

        case commentConstants.LOAD_REPLIES_BY_COMMENT_FAIL:
            return {
                ...state,
                loadingRepliesComment: false,
                successRepliesComment: false,
                errorRepliesComment: true,
            }

        default:
            return state;
    }
}