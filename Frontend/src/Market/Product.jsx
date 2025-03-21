import { Link } from "react-router-dom"
import '../Profile/Login.css'
export default function Product({product}){
    return(
        <div className="product">
              <img className="product-image"  src="CS73461_1.jpg" alt=""/>
              <div className="product-details">
                <p className="product-name">Ratthi Milk Powder 400g</p>
                <div className="price-div">
                  
                <p className="price">Rs.1050</p>
                <p className="discount">Rs.1050</p>
                </div>
                <a href="productdetail.html"><p className="add">View product</p></a>
              </div>
            </div>
    )
}
