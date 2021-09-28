import {createStore, combineReducers} from 'redux'
import Mode from './setting/setting'
export default createStore(
    combineReducers({
        mode: Mode
    })
)
