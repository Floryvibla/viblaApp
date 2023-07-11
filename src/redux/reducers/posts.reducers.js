import { postsConstants } from "../constants";


const initialState = {
    loadingPosts: false,
    successPosts: false,
    errorPosts: false,
    posts: false,

    loadingCreatePost: false,
    successCreatePost: false,
    errorCreatePost: false,
    post: false,

    typesPost: false
}

export const postsReducer= (state = initialState, action) => {
    switch (action.type) {
        case postsConstants.LOAD_POSTS_REQUEST:
            return {
                ...state,
                loadingPosts: true,
                successPosts: false,
                errorPosts: false,
            }
        case postsConstants.LOAD_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload,
                loadingPosts: false,
                successPosts: true,
                errorPosts: false,
            }

        case postsConstants.LOAD_POSTS_FAIL:
            return {
                ...state,
                loadingPosts: false,
                successPosts: false,
                errorPosts: true,
            }

        case postsConstants.CREATE_POST_REQUEST:
            return {
                ...state,
                loadingCreatePost: true,
                successCreatePost: false,
                errorCreatePost: false,
            }
        case postsConstants.CREATE_POST_SUCCESS:
            return {
                ...state,
                post: action.payload,
                loadingCreatePost: false,
                successCreatePost: true,
                errorCreatePost: false,
            }

        case postsConstants.CREATE_POST_FAIL:
            return {
                ...state,
                loadingCreatePost: false,
                successCreatePost: false,
                errorCreatePost: true,
            }

        case postsConstants.CLEAN_CREATE_POST:
            return {
                ...state,
                loadingCreatePost: false,
                successCreatePost: false,
                errorCreatePost: false,
                post: false
            }

        case postsConstants.LOAD_TYPES_POST:
            return {
                ...state,
                typesPost: action.payload
            }

        default:
            return state;
    }
}