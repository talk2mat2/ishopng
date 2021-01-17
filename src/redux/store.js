import { createStore,combineReducers } from 'redux'
import{ UserReducers} from './reducer'

const rootReducer=combineReducers({user:UserReducers})



export const store = createStore(rootReducer)
