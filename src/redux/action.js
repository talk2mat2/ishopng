import * as Action_types from "./actiontypes"

export const  loginUsersuccess=(userData)=>{
    return{type: Action_types.loginUserSuccess,
    payload:userData}
}
export const  LIST_PRODUCTS_SUCCESS=(products)=>{
    return{type: Action_types.LIST_PRODUCTS_SUCCESS,
    payload:products}
}
export const  LIST_PRODUCTS_ERROR=()=>{
    return{type: Action_types.LIST_PRODUCTS_ERROR,
    }
}
export const  FETCH_CART_SUCCESS=(cart)=>{
    return{type: Action_types.FETCH_CART_SUCCESS,
    payload:cart}
}