import * as Action_types from "./actiontypes"

const init_state={currentUser:null}
export const UserReducers=(state=init_state,action)=>{
  
  if(action.type===Action_types.loginUserSuccess){
      return{...state,currentUser:action.payload}
  }
else{return state}


}
const Product_init_state={products:{},error:false}
export const productReducer=(state=Product_init_state,action)=>{
  if(action.type===Action_types.LIST_PRODUCTS_SUCCESS){
    return{...state,products:action.payload,error:false}
}
  if(action.type===Action_types.LIST_PRODUCTS_ERROR){
    return{...state,error:true}
}
else{return state}
}
const cart_init_state=[]
export const cartReducer=(state=cart_init_state,action)=>{
  if(action.type===Action_types.FETCH_CART_SUCCESS){
    return{...action.payload}
}
else{return state}
}

const RecentViewd=[]
export const RecentViewdItemRedcer=(state=RecentViewd,action)=>{
  if(action.type===Action_types.ADD_RECENTVIEWD_ITEM){
    if(state.length>4){ state.pop()
    return[action.payload,...state]}
    else{ return[action.payload,...state]}
}
else{return state} 

}