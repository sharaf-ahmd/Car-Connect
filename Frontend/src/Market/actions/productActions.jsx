import { newProductFail,
    newProductRequest,
    newProductSuccess,
    
} from "../slice/productSlice.jsx";
import axios from 'axios'

export const createNewProduct=productData=>async(dispatch)=>{
    try {
        dispatch(newProductRequest())
        const config = { headers: { 'Content-Type': 'multipart/form-data' } };
        const { data }  =  await axios.post(`/api/supplier/product/new`,productData,config);
        dispatch(newProductSuccess(data))
    } catch (error) {
        dispatch(newProductFail(error.response.data.message))
    }
}