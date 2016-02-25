import { combineReducers } from 'redux'
import items from './items'

const layoutConstructor = combineReducers({
    items
});

export default layoutConstructor
