import useSWR from "swr"
import { getToken } from "../../utils/functions"
import { commentConstants } from "../constants"
import { queryComments } from "../graphql"
import { commentService, authService } from "../services"




export const commentActions = {
    LoadCommentsByPost,
    createComment,
    cleanCreateComment,

    LoadReplieCommentsByComment,
    loadReplieCommentsByComment
}

function LoadCommentsByPost(idPost, page=0, pageSize=10) {

    const { data, error, mutate } = useSWR(`/comments/post/${idPost}?page=${page}`, async () => {

        const response = await commentService.loadCommentsByPost(idPost, page, pageSize)

        const data = await response.data
    
        return data
  
    })

    // console.log(data);
  
    return {dataCommentsByPost: data, error, mutateComments: mutate }
}

function createComment(dataUser) {
    return dispatch => {
        dispatch({
            type: commentConstants.CREATE_COMMENT_REQUEST
        })

        commentService.createComment(dataUser)
        .then(response => {
            dispatch({
                type: commentConstants.CREATE_COMMENT_SUCCESS,
                payload: response.data
            })
            console.log(response.data);
        })
        .catch(error => {
            dispatch({
                type: commentConstants.CREATE_COMMENT_FAIL,
                payload: error
            })
            console.log(error);
        })

    }
}


function cleanCreateComment() {
    return dispatch => {
        dispatch({
            type: commentConstants.CLEAN_CREATE_COMMENT
        })

    }
}

function loadReplieCommentsByComment(idComment, page=0, pageSize=10) {
    return dispatch => {
        dispatch({
            type: commentConstants.LOAD_REPLIES_BY_COMMENT_REQUEST,
        })
        commentService.loadReplieCommentsByComment(idComment, page)
        .then(response => {
            dispatch({
                type: commentConstants.LOAD_REPLIES_BY_COMMENT_SUCCESS,
                payload: response.data
            })
            console.log(response.data);
        })
        .catch(error => {
            dispatch({
                type: commentConstants.LOAD_REPLIES_BY_COMMENT_FAIL
            })
            console.log(error);
        })
    }
}

function LoadReplieCommentsByComment(idComment, page=0, pageSize=10) {

    const { data, error, mutate } = useSWR(`/comments/post/${idComment}?page=${page}`, async () => {

        const response = await commentService.loadReplieCommentsByComment(idComment, page, pageSize)

        const data = await response.data
    
        return data
  
    })

    // console.log(data);
  
    return {dataReplieComments: data, error, mutateReplieComments: mutate }
}
