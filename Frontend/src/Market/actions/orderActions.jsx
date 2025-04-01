import axios from 'axios';
import { createOrderRequest,
    createOrderSuccess,
    createOrderFail,
    adminOrdersFail,
    adminOrdersRequest,
    adminOrdersSuccess,
    deleteOrdersFail,
    deleteOrdersRequest,
    deleteOrdersSuccess,
    supplierOrdersRequest,
    supplierOrdersSuccess,
    supplierOrdersFail,
    orderDetailFail,
    orderDetailRequest,
    orderDetailSuccess,

} from '../slice/orderSlice';

export const createOrder = order => async(dispatch) => {
    try {
       dispatch(createOrderRequest())
       const {data} = await axios.post(`/api/order/new`, order)
       dispatch(createOrderSuccess(data))
    } catch (error) {
        dispatch(createOrderFail(error.response.data.message))
    }
}
export const adminOrders =  async(dispatch) => {
    try {
       dispatch(adminOrdersRequest())
       const {data} = await axios.get(`/api/admin/orders`)
       dispatch(adminOrdersSuccess(data))
    } catch (error) {
        dispatch(adminOrdersFail(error.response.data.message))
    }
}
export const deleteOrder = id=> async(dispatch) => {
    try {
       dispatch(deleteOrdersRequest())
       const {data} = await axios.delete(`/api/admin/delete/order/${id}`)
       dispatch(deleteOrdersSuccess(data))
    } catch (error) {
        dispatch(deleteOrdersFail(error.response.data.message))
    }
}
export const supplierOrders =  async(dispatch) => {
    try {
       dispatch(supplierOrdersRequest())
       const {data} = await axios.get(`/api/supplier/order`)
       dispatch(supplierOrdersSuccess(data))
    } catch (error) {
        dispatch(supplierOrdersFail(error.response.data.message))
    }
}
export const orderDetail = id=> async(dispatch) => {
    try {
       dispatch(orderDetailRequest())
       const {data} = await axios.get(`/api/order/${id}`)
       dispatch(orderDetailSuccess(data))
    } catch (error) {
        dispatch(orderDetailFail(error.response.data.message))
    }
}