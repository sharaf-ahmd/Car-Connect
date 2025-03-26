import axios from 'axios';
import { createOrderRequest,createOrderSuccess,createOrderFail} from '../slice/orderSlice';

export const createOrder = order => async(dispatch) => {
    try {
       dispatch(createOrderRequest())
       const {data} = await axios.post(`/api/order/new`, order)
       dispatch(createOrderSuccess(data))
    } catch (error) {
        dispatch(createOrderFail(error.response.data.message))
    }
}