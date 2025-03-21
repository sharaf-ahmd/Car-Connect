import React from 'react'
import '../Profile/Login.css'
import Search from './Search'
import Product from './Product.jsx'

const Shop = () => {
  return (
    <div className='container1'>
      
      
     <Search />
      
      <div className="product-container">
        <div className="dairy">
          <h2 className="category-heading">Dairy Products</h2>
          <div className="products">
            
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            
          </div>
          
            <p className="show-more">Show More</p>
          
          
        </div>
        
        
      </div>
      
      
      
    </div>
  )
}

export default Shop
