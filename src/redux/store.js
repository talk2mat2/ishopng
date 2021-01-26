import { createStore,combineReducers } from 'redux'
import{ UserReducers,productReducer,cartReducer,RecentViewdItemRedcer} from './reducer'

const rootReducer=combineReducers({user:UserReducers,products:productReducer,
    cart:cartReducer,viewdItems:RecentViewdItemRedcer})



export const store = createStore(rootReducer)
