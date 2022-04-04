import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'

import { otherReducer } from '../reducers'

export const store= createStore(
    combineReducers({
        others: otherReducer
    }),
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)