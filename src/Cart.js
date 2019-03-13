import React from "react";
import Product from "./Product.js";
import ProductData from "./Data"
import "./styles/cart.css";

class Cart extends React.Component {

  render() {
    return (
        <div className="page-content">
            <div className="ui cards">
              {/* <Product productName="Apple" price={2} limit={10} /> */}
              {ProductData.products.map(product =>(
                <Product productName={product.name} price={product.cost} limit={product.stock} />
              ))}
            </div>
            
        </div>
    );
  }

}

export default Cart;
