import { handleDataValidationConditions } from "./dataValidationConditions";

export const conditionsSignup = handleDataValidationConditions([
    'name', 'username', 'email', 'password', "confirmPass"
])

export const conditionsLogin = handleDataValidationConditions([
    'identifier', 'password'
])