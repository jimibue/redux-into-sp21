import {combineReducers} from 'redux';
import todos from './todos'
import nextId from './nextId'

const rootReducer = combineReducers({
    todos,
    nextId
    // add other reducers
})

export default rootReducer