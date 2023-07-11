import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'

import { otherReducer, postsReducer, authReducer, commentReducer } from '../reducers'

export const store= createStore(
    combineReducers({
        others: otherReducer,
        posts: postsReducer,
        auth: authReducer,
        comment: commentReducer
    }),
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)