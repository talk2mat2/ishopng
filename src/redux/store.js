import { createStore,combineReducers } from 'redux'
import{ UserReducers,productReducer} from './reducer'

const rootReducer=combineReducers({user:UserReducers,products:productReducer})



export const store = createStore(rootReducer)
