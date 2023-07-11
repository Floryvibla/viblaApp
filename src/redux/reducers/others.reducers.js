import { othersConstants } from '../constants'

const initialState = {
    openSearch: false,
    openModal: false,
    openDropdown: false,
    titleDropdown: "Todos",
    typePostCreate: {title: "post"},
    contentDisplayModal: "",
    contentDisplayModalData: null,
    isLogin: true
}

export const otherReducer= (state = initialState, action) => {
    switch (action.type) {
        case othersConstants.SET_AUTH: 
            return {
                ...state,
                isLogin: action.payload
            }
        case othersConstants.OPEN_MODAL: 
            return {
                ...state,
                openModal: action.payload
            }
        case othersConstants.CLOSE_MODAL: 
            return {
                ...state,
                openModal: false
            }
        case othersConstants.CONTENT_DISPLAY_MODAL: 
            return {
                ...state,
                contentDisplayModal: action.payload?.title,
                contentDisplayModalData: action.payload?.data
            }
        case othersConstants.SET_OPENSEARCH:
            return {
                ...state,
                openSearch: action.payload
            }
        case othersConstants.SET_OPEN_MODAL:
            return {
                ...state,
                openModal: action.payload
            }

        case othersConstants.OPEN_DROPDOW_HEADER:
            return {
                ...state,
                openDropdown: action.payload
            }
        case othersConstants.CLOSE_DROPDOW_HEADER:
            return {
                ...state,
                openDropdown: action.payload
            }
        case othersConstants.SET_CONTENT_DROPDOWN_HEADER:
            return {
                ...state,
                titleDropdown: action.payload
            }
        case othersConstants.SET_CONTENT_TYPE_POST:
            return {
                ...state,
                typePostCreate: action.payload
            }

        default:
            return state;
    }
}