import {
    registerFail,
    registerRequest,
    registerSuccess,
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
    updatePasswordFail,
    updatePasswordRequest,
    updatePasswordSuccess,
    forgotPasswordFail,
    forgotPasswordRequest,
    forgotPasswordSuccess,
    resetPasswordFail,
    resetPasswordRequest,
    resetPasswordSuccess,
    
    
} from '../slice/userSlice';

import axios from 'axios';

//user register
export const register=(userData)=>async(dispatch)=>{
    try{
        dispatch(registerRequest())
        const {data}=await axios.post('/api/register',userData)
        dispatch(registerSuccess(data))
    }catch(error){
        dispatch(registerFail(error.response.data.message))
    }
}

//clear error
export const clearAuthError=dispatch=>{
    dispatch(clearError())
}

//Supplier register
export const supplierRegister=(userData)=>async(dispatch)=>{
    try{
        dispatch(supplierRegisterRequest())
        const {data}=await axios.post('/api/register/supplier',userData)
        dispatch(supplierRegisterSuccess(data))
    }catch(error){
        dispatch(supplierRegisterFail(error.response.data.message))
    }
}


//login
export const login=(phoneNo,password)=>async(dispatch)=>{
    try {
        dispatch(loginRequest())
        const {data}=await axios.post('/api/login',{phoneNo,password})
        dispatch(loginSuccess(data))

    } catch (error) {
        dispatch(loginFail(error.response.data.message))
    }
}

//logout
export const logout=async(dispatch)=>{
    try {
        await axios.get('/api/logout')
        dispatch(logoutSuccess())
    } catch (error) {
        dispatch(logoutFail(error))
    }
}
//load user details
export const loadUser=async(dispatch)=>{
    try {
        dispatch(loadUserRequest())
        const {data} =await axios.get('/api/myprofile')
        dispatch(loadUserSuccess(data))
    } catch (error) {
        dispatch(loadUserFail(error.response.data.message))
    }
}
export const updateProfile=(userData)=>async (dispatch)=>{
    try {
        dispatch(updateProfileRequest())
        
        
        const {data}=await axios.put(`/api/update`,userData)
        console.log(data.name)
        dispatch(updateProfileSuccess(data))
    } catch (error) {
        dispatch(updateProfileFail(error.response.data.message))
    }
}

export const updatePassword=(formData)=>async (dispatch)=>{
    try {
        dispatch(updatePasswordRequest())
        
        const config={
            headers:{
                'Content-type':'application/json'
            }
        }
        await axios.put(`/api/password/change`,formData,config)
        dispatch(updatePasswordSuccess())
    } catch (error) {
        dispatch(updatePasswordFail(error.response.data.message))
    }
}

export const forgotPassword=(formData)=>async (dispatch)=>{
    try {
        dispatch(forgotPasswordRequest())
        
        const config={
            headers:{
                'Content-type':'application/json'
            }
        }
        const {data}=await axios.post(`/api/password/forgot`,formData,config)
        dispatch(forgotPasswordSuccess(data))
    } catch (error) {
        dispatch(forgotPasswordFail(error.response.data.message))
    }
}

export const resetPassword=(formData,token)=>async (dispatch)=>{
    try {
        dispatch(resetPasswordRequest())
        
        const config={
            headers:{
                'Content-type':'application/json'
            }
        }
        const {data}=await axios.post(`/api/password/reset/${token}`,formData,config)
        dispatch(resetPasswordSuccess(data))
    } catch (error) {
        dispatch(resetPasswordFail(error.response.data.message))
    }
}
