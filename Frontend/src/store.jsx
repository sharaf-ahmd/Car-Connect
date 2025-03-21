import {configureStore,combineReducers} from '@reduxjs/toolkit';
import authReducer from './Profile/slice/userSlice'
import productReducer from './Market/slice/productSlice.jsx'


const reducer=combineReducers({
    authState:authReducer,
    productState:productReducer,
})
const store=configureStore({
    reducer,
})
export default store;