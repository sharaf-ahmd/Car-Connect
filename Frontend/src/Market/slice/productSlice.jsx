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
        }
    }
})
const {actions,reducer}=productSlice;
export const{
    newProductFail,
    newProductRequest,
    newProductSuccess,
    clearProductCreated,
    clearError
}=actions;

export default reducer;