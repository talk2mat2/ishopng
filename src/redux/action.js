import * as Action_types from "./actiontypes"

export const  loginUsersuccess=(userData)=>{
    return{type: Action_types.loginUserSuccess,
    payload:userData}
}