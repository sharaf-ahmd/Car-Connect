import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {HelmetProvider} from 'react-helmet-async'
import Home from './components/Home.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Login from './Profile/Login.jsx'
import UserRegister from './Profile/UserRegister.jsx'
import SupplierRegister from './Profile/SupplierRegister.jsx'
import './App.css'
import { ToastContainer } from 'react-toastify'
import Shop from './Market/Shop.jsx'
import { loadUser } from './Profile/actions/userActions.jsx'
import React,{useEffect} from 'react'
import store from './store.jsx'
import AddProduct from './Market/NewProduct.jsx'
import ProtectedRoute from './route/protectedRoute.jsx'
import ProductDetail from './Market/ProductDetail.jsx'

function App() {
  useEffect(()=>{
    store.dispatch(loadUser)
  },[])

  return (
    <Router>
      <HelmetProvider>
        <Header/>
        <ToastContainer />
        <Routes>
          {/* CarRepair routes */}
        </Routes>

        <Routes>
          {/* CarWash routes */}
        </Routes>

        <Routes>
          {/* Market routes */}
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/new/product" element={<ProtectedRoute isSupplier={true}><AddProduct/></ProtectedRoute>}/>
          <Route path="/product/:id" element={<ProductDetail/>}/>
        </Routes>

        <Routes>
          {/* Profile routes */}
          <Route path="/login" element={<Login/>}/>
          <Route path="/user/register" element={<UserRegister/>}/>
          <Route path="/supplier/register" element={<SupplierRegister/>}/>
        </Routes>

        <Routes>
          {/* Towing routes */}
        </Routes>
        <Footer />
      </HelmetProvider>
    </Router>
  )
}

export default App
