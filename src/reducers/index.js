import {combineReducers} from 'redux';
import todos from './todos'
import nextId from './nextId'
import filter from './filter'

const rootReducer = combineReducers({
    todos,
    nextId,
    filter,
    // add other reducers
})

export default rootReducer