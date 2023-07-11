import HttpInterno from "../../config/http"
import { getToken } from "../../utils/functions"

const httpInterno= HttpInterno()

export const authService = { 
    createUser,
    auth,
    loadUsers,
    getUserById,
    getMe,
    editUser,
    loadRoles,
    deleteUser,
}

function createUser(userData) {
    return httpInterno.post(`auth/local/register`, userData)
}

function auth(dataUser) {
    const { identifier, password } = dataUser
    return httpInterno.post(`/auth/local`, {
        identifier,
        password,
    })
}


async function getMe(userToken) {
    const getTokenUser = await getToken()
    const token =  typeof getTokenUser.token !== 'undefined' ? getTokenUser.token : userToken
    
    return httpInterno.get(`/users/me?populate=*`, {headers: {"Authorization" : `Bearer ${token}`}})
}

async function loadUsers() {
    const queryParams = `/users?populate[avatar][fields][0]=name&populate[avatar][fields][1]=url`
    const getTokenUser = await getToken()
    const token =  getTokenUser.token

    return httpInterno.get(queryParams, {headers: {"Authorization" : `Bearer ${token}`}})
}

async function getUserById(id) {
    const queryParams = `/users${id}?populate[avatar][fields][0]=name&populate[avatar][fields][1]=url`
    const getTokenUser = await getToken()
    const token =  getTokenUser.token

    return httpInterno.get(queryParams, {headers: {"Authorization" : `Bearer ${token}`}})
}

function loadRoles() {
    return httpInterno.get(`/users-permissions/roles`)
}

function editUser(id, userData) {
    // console.log(storageToken);
    return httpInterno.put(`/users/${id}`, userData)
}

function deleteUser(id) {
    return httpInterno.delete(`/users/${id}`)
}