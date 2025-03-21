import React from 'react'
import '../Profile/Login.css'

const UpdateProduct = () => {
  return (
    <div className="container1">
      <div className="register">
    <p className="login-title">Update Product</p>
    
    <div className="form-div">

      <form>
          <label className="label" for="name">Name</label><br/>
        <input type="text" id='name' required placeholder="Name"/><br/><br/>
        
        <label className="label" for="price">Price</label><br/>
        <input type="number" id='price' required placeholder="Price"/><br/><br/>
        <label className="label"  for="stock">Stock</label><br/>
        <input type="number" id="stock" required placeholder="Stock"/><br/><br/>
        <label className="label"  for="category">Select category</label><br/>
        
        <select className="category-select" name="select" id="category">
          <option value="c">c</option>
          <option value="d">d</option>
        </select>

        
        <br/><br/>

        <label className="label"  for="image">Image</label><br/>
        <input type="file" id="image" required placeholder="Upload Image"/>
        
        <br/><br/>
        <input type="submit" className="submit" value="Update Product"/>
        
    
      </form>
      
    </div>
  </div>

      
    </div>
  )
}

export default UpdateProduct
