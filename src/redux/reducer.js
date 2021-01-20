import * as Action_types from "./actiontypes"

const init_state={currentUser:null}
export const UserReducers=(state=init_state,action)=>{
  
  if(action.type===Action_types.loginUserSuccess){
      return{...state,currentUser:action.payload}
  }
else{return state}


}
const Product_init_state=[]
export const productReducer=(state=Product_init_state,action)=>{
  if(action.type===Action_types.LIST_PRODUCTS_SUCCESS){
    return[...action.payload]
}
else{return state}
}


