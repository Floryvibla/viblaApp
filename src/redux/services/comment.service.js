import Graphql from "../../config/graphql"
import HttpInterno from "../../config/http"
import { getToken } from "../../utils/functions"

const httpInterno= HttpInterno()
const graphql= Graphql()

const queryex = {
    "operationName": "fetchcommentByPost",
    "query": `query fetchcommentByPost {
        post(id: 10) {
            data {
                id
                attributes {
                   info
                   owner {
                       data {
                           id
                           attributes {
                               username
                               name
                               is_founder
                               is_verified
                               avatar {
                                    data {
                                        attributes {
                                            url
                                        }
                                    }
                                }
                                
                           }
                       }
                   }
                   type {
                       data {
                           attributes {
                               title
                           }
                       }
                   }
                   image {
                       data {
                           id
                       }
                   }
                   comments {
                       data {
                           id
                           attributes {
                               comment
                               createdAt
                               replie_comments {
                                   data {
                                       id
                                       attributes {
                                           replie
                                           createdAt
                                           user {
                                               data {
                                                   id
                                                   attributes {
                                                       name
                                                       username
                                                       is_founder
                                                       is_verified
                                                       avatar {
                                                           data {
                                                               attributes {
                                                                   url
                                                               }
                                                           }
                                                       }
                                                   }
                                               }
                                           }
                                       }
                                   }
                               }
                               user {
                                   data {
                                        id
                                        attributes {
                                            username
                                            name
                                            is_founder
                                            is_verified
                                            avatar {
                                                data {
                                                    attributes {
                                                        url
                                                    }
                                                }
                                            }
                                                
                                        }
                                    }
                               }
                           }
                       }
                   }
                }
            }
        }
    }`
}


export const commentService = {
    loadCommentsByPost,
    createComment,
    loadReplieCommentsByComment,
}

async function loadCommentsByPost(idPost, page=0, pageSize=10) {

    const getTokenUser = await getToken()
    const token =  getTokenUser.token

    return httpInterno.get(`/comments/post/${idPost}?page=${page}`, {headers: {"Authorization" : `Bearer ${token}`}})
}

async function createComment(dataUser) {
    const getTokenUser = await getToken()
    const token =  getTokenUser.token
    return httpInterno.post(`/comments`, {data: dataUser}, {headers: {"Authorization" : `Bearer ${token}`}})
}

async function loadReplieCommentsByComment(idComment, page=0, pageSize=10) {

    const getTokenUser = await getToken()
    const token =  getTokenUser.token

    return httpInterno.get(`/replie-comments/comment/${idComment}?page=${page}`, {headers: {"Authorization" : `Bearer ${token}`}})
}