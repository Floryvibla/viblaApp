import { othersConstants } from '../Constants/redux/others.constants'

const initialState = {
    openSearch: false,
}

export const otherReducer= (state = initialState, action) => {
    switch (action.type) {
        case othersConstants.SET_OPENSEARCH:
            return {
                ...state,
                openSearch: action.payload
            }

        default:
            return state;
    }
}