import { applyMiddleware, createStore } from "redux";
import {rootReducer, initialeState} from '../Reducer/rootReducer'
import thunk from 'redux-thunk'

export const store = createStore(rootReducer, initialeState, applyMiddleware(thunk))