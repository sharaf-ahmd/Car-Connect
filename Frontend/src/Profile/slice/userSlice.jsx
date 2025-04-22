import {createSlice} from '@reduxjs/toolkit'
const authSlice=createSlice({
    name:'auth',
    initialState:{
        loading:false,
        isAuthenticated:false
    },
    reducers:{
        registerRequest(state,action){
            return{
                ...state,
                loading:true
            }
        },
        registerSuccess(state, action){
            return {
                ...state,
                loading: false,
                isAuthenticated:true,
                user: action.payload.user
                
            }
        },
        registerFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload
            }
        },
        loginRequest(state, action){
            return {
                ...state,
                loading: true,
            }
        },
        loginSuccess(state, action){
            return {
                ...state,
                loading: false,
                isAuthenticated:true,
                user: action.payload.user
                
            }
        },
        loginFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload
            }
        },
        clearError(state,action){
            return {
                ...state,
                error:null
            }
        },
        logoutSuccess(state, action){
            return {
                ...state,
                loading: false,
                isAuthenticated:false,
                user:null,
                
            }
        },
        logoutFail(state, action){
            return {
                ...state,
                error:  action.payload
            }
        },
        supplierRegisterRequest(state,action){
            return{
                ...state,
                loading:true
            }
        },
        supplierRegisterSuccess(state, action){
            return {
                ...state,
                loading: false,
                isAuthenticated:true,
                user: action.payload.user
                
            }
        },
        supplierRegisterFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload
            }
        },
        loadUserRequest(state, action){
            return {
                ...state,
                isAuthenticated:false,
                loading: true,
            }
        },
        loadUserSuccess(state, action){
            return {
                ...state,
                loading: false,
                isAuthenticated:true,
                user: action.payload.user
                
            }
        },
        loadUserFail(state, action){
            return {
                ...state,
                loading: false,
                
            }
        },
        updateProfileRequest(state, action){
            return {
                ...state,
                loading: true,
                isUpdated:false
            }
        },
        updateProfileSuccess(state, action){
            return {
                ...state,
                loading: false,
                user: action.payload.user,
                isUpdated:true
                
            }
        },
        updateProfileFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload
            }
        },clearUpdateProfile(state,action){
            return{
                ...state,
                isUpdated:false,
            }
        },
        updatePasswordRequest(state, action){
            return {
                ...state,
                loading: true,
                isUpdated:false
            }
        },
        updatePasswordSuccess(state, action){
            return {
                ...state,
                loading: false,
                isUpdated:true
                
            }
        },
        updatePasswordFail(state, action){
            return {
                ...state,
                loading: false,
                error:  action.payload
            }
        },
        
    }
})
const {actions,reducer}=authSlice;
export const{
    registerRequest,
    registerSuccess,
    registerFail,
    loginFail,
    loginRequest,
    loginSuccess,
    clearError,
    logoutFail,
    logoutSuccess,
    supplierRegisterFail,
    supplierRegisterRequest,
    supplierRegisterSuccess,
    loadUserFail,
    loadUserRequest,
    loadUserSuccess,
    updateProfileFail,
    updateProfileRequest,
    updateProfileSuccess,
    clearUpdateProfile,
    updatePasswordFail,
    updatePasswordRequest,
    updatePasswordSuccess,

}=actions;
export default reducer;