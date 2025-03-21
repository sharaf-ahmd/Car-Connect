import { createSlice } from "@reduxjs/toolkit";


const productSlice=createSlice({
    name:'product',
    initialState:{
        loading:false,
        product:{},
        isProductCreated:false,
        isProductDeleted:false,
        isProductUpdated:false,
    },
    reducers:{
        newProductRequest(state,action){
            return{
                ...state,
                loading: true
            }
        },
        newProductSuccess(state, action){
            return {
                ...state,
                loading: false,
                product: action.payload.product,
                isProductCreated:true
                
            }
        },
        newProductFail(state, action){
            return {
                loading: false,
                error:  action.payload,
                isProductCreated:false
            }
        },
        clearProductCreated(state, action){
            return{
                ...state,
                isProductCreated:false
            }
        },
        clearError(state,action){
            return{
                ...state,
                error:null,
            }
        },
        productRequest(state, action){
            return {
                loading: true
            }
        },
        productSuccess(state, action){
            return {
                loading: false,
                product: action.payload.product
                
            }
        },
        productFail(state, action){
            return {
                loading: false,
                error:  action.payload
            }
        },
        adminProductRequest(state, action){
            return {
                loading: true
            }
        },
        adminProductSuccess(state, action){
            return {
                loading: false,
                products: action.payload.products
                
            }
        },
        adminProductFail(state, action){
            return {
                loading: false,
                error:  action.payload
            }
        },

    }
})
const {actions,reducer}=productSlice;
export const{
    newProductFail,
    newProductRequest,
    newProductSuccess,
    clearProductCreated,
    clearError,
    productFail,
    productRequest,
    productSuccess,
    adminProductFail,
    adminProductRequest,
    adminProductSuccess,
}=actions;

export default reducer;