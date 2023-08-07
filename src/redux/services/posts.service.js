import HttpInterno from "../../config/http"
import { getToken } from "../../utils/functions"

const httpInterno= HttpInterno()

export const postsService = {
    loadPosts,
    getTypesPost,
    createPost,
    likePost
}

async function loadPosts() {
    const getTokenUser = await getToken()
    const token =  getTokenUser.token
    // console.log("Token: ", token);
    return httpInterno.get(`/posts?populate[owner][populate][0]=avatar&populate=medias`, {headers: {"Authorization" : `Bearer ${token}`}})
}

async function getTypesPost() {
    const getTokenUser = await getToken()
    const token =  getTokenUser.token
    return httpInterno.get(`/type-posts`, {headers: {"Authorization" : `Bearer ${token}`}})
}

async function createPost(dataUser) {
    const getTokenUser = await getToken()
    const token =  getTokenUser.token
    return httpInterno.post(`/posts`, {data: dataUser}, {headers: {"Authorization" : `Bearer ${token}`}})
}
async function likePost(dataUser) {
    const getTokenUser = await getToken()
    const token =  getTokenUser.token
    return httpInterno.post(`/liked-posts`, dataUser, {headers: {"Authorization" : `Bearer ${token}`}})
}