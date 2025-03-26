import { createSlice } from "@reduxjs/toolkit";

const orderSlice =createSlice({
    name:'order',
    initialState:{
        orderDetail:{},
        
        isOrderDeleted:false,
        isOrderUpdated:false,

        
    },
    reducers: {
        createOrderRequest(state, action) {
            return {
                ...state,
                loading: true
            }
        },
        createOrderSuccess(state, action) {
            return {
                ...state,
                loading: false,
                orderDetail: action.payload.order
            }
        },
        createOrderFail(state, action) {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
        clearError(state,action){
            return{
                ...state,
            error:null
            }
            
        }
    }
    })
    const { actions, reducer } = orderSlice;
    export const{
        createOrderFail,
        createOrderRequest,
        createOrderSuccess,
        clearError
    }=actions;

    export default reducer;