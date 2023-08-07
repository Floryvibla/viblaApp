import { ConditionsValidationProps, OnMsgErroProps } from "./types"


export const handleMsgErro = ({ key, message }: OnMsgErroProps) => {
    switch (key) {
        case 'name':
          return message ?? "Digite 2 nome, ex:(Nelson Mandela)"
        case 'username':
          return message ?? "Precisa ter mais 3 caracteres"
        case 'email':
          return message ?? "O formato de email invalido"
        case 'password':
          return message ?? "Precisa ter mais de 6 caracteres"
        case 'confirmPass':
          return message ?? "As senhas não combina"
        case 'identifier':
          return message ?? "Precisa ter mais 3 caracteres"
      
        default:
          break;
    }
}