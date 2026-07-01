import React from "react";
import ReactDOM from "react-dom/client";

// Cart Component
class Cart extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.itemname}</td>
        <td>₹{this.props.price}</td>
      </tr>
    );
  }
}

// OnlineShopping Component
class OnlineShopping extends React.Component {
  constructor(props) {
    super(props);

    // Array of 5 Cart items
    this.items = [
      { itemname: "Laptop", price: 65000 },
      { itemname: "Mobile Phone", price: 25000 },
      { itemname: "Headphones", price: 3000 },
      { itemname: "Smart Watch", price: 5000 },
      { itemname: "Keyboard", price: 1500 }
    ];
  }

  render() {
    return (
      <div style={{ textAlign: "center", fontFamily: "Arial" }}>
        <h1>Online Shopping Cart</h1>

        <table
          border="1"
          cellPadding="10"
          style={{
            margin: "auto",
            borderCollapse: "collapse",
            width: "50%"
          }}
        >
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {this.items.map((item, index) => (
              <Cart
                key={index}
                itemname={item.itemname}
                price={item.price}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

// reactDOM.render() equivalent in React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<OnlineShopping />);