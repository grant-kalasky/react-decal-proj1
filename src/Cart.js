import React from "react";
import Product from "./Product.js";
import ProductData from "./Data"
import Receipt from "./Receipt.jsx"
import "./styles/cart.css";

class Cart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    };
  }

  handleAddToCart(name, price) {
    var currCart = [...this.state.cartItems];
    for (let i = 0; i < currCart.length; i++) {
      if (currCart[i].productName === name) {
        currCart[i].count++;
        this.setState({
          cartItems: currCart
        });
        return;
      }
    }
    this.setState({
      cartItems: [...currCart, {productName: name, price: price, count: 1}]
    });
  }

  handleRemoveFromCart(name) {
    var currCart = [...this.state.cartItems];
    const updatedCart = currCart.filter(item => item.productName !== name);
    this.setState( {cartItems: updatedCart} );
  }

  render() {
    return (
        <div className="page-content">
            <div className="ui cards">
              {ProductData.products.map(product =>(
                <Product 
                  productName={product.name} 
                  price={product.cost} 
                  onAddToCart={this.handleAddToCart.bind(this)}
                  onRemoveFromCart={this.handleRemoveFromCart.bind(this)} />
              ))}
              <Receipt items={this.state.cartItems} />
            </div>
            
        </div>
    );
  }
}

export default Cart;
