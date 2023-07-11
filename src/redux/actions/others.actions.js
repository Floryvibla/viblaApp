import { othersConstants } from "../constants"

export const othersActions = {
    openDropdown,
    closeDropdown,
    setTitleDropdown,
    setTypePostCreate,
    openModal,
    changeContentModal,
    setContentdisplayModal,
    closeModal,
    handleAuth,
}

function handleAuth(state=false) {
    return dispatch => {
        dispatch({
            type: othersConstants.SET_AUTH,
            payload: state
        })

    }
}

function openDropdown(state) {
    return dispatch => {
        dispatch({
            type: othersConstants.OPEN_DROPDOW_HEADER,
            payload: state
        })

    }
}

function closeDropdown() {
    return dispatch => {
        dispatch({
            type: othersConstants.CLOSE_DROPDOW_HEADER,
            payload: false
        })

    }
}

function setTitleDropdown(title) {
    return dispatch => {
        dispatch({
            type: othersConstants.SET_CONTENT_DROPDOWN_HEADER,
            payload: title
        })
        dispatch({
            type: othersConstants.CLOSE_DROPDOW_HEADER,
            payload: false
        })

    }
}

function openModal(contentDisplayData) {
    return dispatch => {
        dispatch({
            type: othersConstants.OPEN_MODAL,
            payload: true
        })
        dispatch({
            type: othersConstants.CONTENT_DISPLAY_MODAL,
            payload: contentDisplayData
        })
    }
}

function changeContentModal(contentDisplay) {
    return dispatch => {
        dispatch({
            type: othersConstants.CONTENT_DISPLAY_MODAL,
            payload: contentDisplay
        })
    }
}

function closeModal() {
    return dispatch => {
        dispatch({
            type: othersConstants.CLOSE_MODAL,
            payload: false
        })
        dispatch({
            type: othersConstants.CONTENT_DISPLAY_MODAL,
            payload: ""
        })
    }
}

function setContentdisplayModal(contentDisplay, state=false) {
    return dispatch => {
        dispatch({
            type: othersConstants.CONTENT_DISPLAY_MODAL,
            payload: contentDisplay
        })
        dispatch({
            type: othersConstants.OPEN_MODAL,
            payload: state
        })

    }
}

function setTypePostCreate(data) {
    return dispatch => {
        dispatch({
            type: othersConstants.SET_CONTENT_TYPE_POST,
            payload: data
        })

    }
}