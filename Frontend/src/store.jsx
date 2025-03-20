import {configureStore,combineReducers} from '@reduxjs/toolkit';
import authReducer from './Profile/slice/userSlice'
const reducer=combineReducers({
    authState:authReducer,
})
const store=configureStore({
    reducer,
})
export default store;