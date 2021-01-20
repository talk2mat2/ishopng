import * as Action_types from "./actiontypes"

export const  loginUsersuccess=(userData)=>{
    return{type: Action_types.loginUserSuccess,
    payload:userData}
}
export const  LIST_PRODUCTS_SUCCESS=(products)=>{
    return{type: Action_types.LIST_PRODUCTS_SUCCESS,
    payload:products}
}