import {addCartItemRequest, addCartItemSuccess} from '../slice/cartSlice.jsx'
import axios from 'axios'
export const addCartItem=(id,quantity)=>async(dispatch)=>{
    try {
        dispatch(addCartItemRequest())
        const {data}=await axios.get(`/api/product/${id}`)
        dispatch(addCartItemSuccess({
            product:data.product._id,
            name:data.product.name,
            price:data.product.price,
            image:data.product.images[0].image,
            stock:data.product.stock,
            quantity
        }))
    } catch (error) {
        
    }
}