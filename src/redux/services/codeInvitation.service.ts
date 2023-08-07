import HttpInterno from "../../config/http"
import { getToken } from "../../utils/functions"

const httpInterno= HttpInterno()

export const codeInvitationService = {
    getCodeInvitation
}

async function getCodeInvitation() {
    const getTokenUser = await getToken()
    const token =  getTokenUser.token
    return httpInterno.post(`/code-invites`, {headers: {"Authorization" : `Bearer ${token}`}})
}