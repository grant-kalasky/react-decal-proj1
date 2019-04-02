import React from "react";
import "./styles/cart.css";

const Product = props => {
    const productName = props.productName;
    const price = props.price;
    // const limit = props.limit;
    // var count = 0;

    // function addToCart(event) {
    //     if (limit === 0) {
    //         alert("This item is out of stock!");
    //     } else if (count >= limit) {
    //         alert("There are too many " + productName + " in your cart!");
    //     } else {
    //         count++;
    //         alert("There are " + count + " " + productName + " in your cart!");
    //     }
    // }

    return (
        <div className="card">
            <div className="content">
                <div className="header">{productName}</div>
                <div className="description">
                    Price: {price}
                </div>
            </div>   
            <div className="ui bottom attached button" onClick={() => props.onAddToCart(productName, price)}>
                <i className="add icon"></i>
                Add to Cart
            </div>
            <div className="ui bottom attached button" onClick={() => props.onRemoveFromCart(productName)}>
                <i className="remove icon"></i>
                Remove from Cart
            </div>
        </div>
    );


};

export default Product;