import React from "react";

class Receipt extends React.Component {
  renderItem(item) {
    return (
        <div className="receipt-item" key={item.productName}>
            <div className="receipt-text">
                {item.productName} x {item.count}
            </div>
            <div className="receipt-text">
                ${item.price.toFixed(2)}
            </div>
        </div>
    );
  }

  calcTotalCost(items) {
    // console.log(items);
    let totalCost = 0;
    for (let i = 0; i < items.length; i++ ) {
        totalCost += items[i].count * items[i].price;
    }
    return(totalCost.toFixed(2));
  }

  render() {
    // const items = [{ name: "Apple", price: 3 }, { name: "Banana", price: 3 }];
    const items = this.props.items;
    return (
      <div className="receipt">
        <h2 className="receipt-text">Receipt</h2>
        {items.map(this.renderItem)}
        <div className="receipt-item">
          <div className="total">Total:</div>
          <div className="total">${this.calcTotalCost(items)}</div>
        </div>
      </div>
    );
  }
}

export default Receipt;