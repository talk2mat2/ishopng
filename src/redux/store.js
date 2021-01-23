import { createStore,combineReducers } from 'redux'
import{ UserReducers,productReducer,cartReducer} from './reducer'

const rootReducer=combineReducers({user:UserReducers,products:productReducer,cart:cartReducer})



export const store = createStore(rootReducer)
