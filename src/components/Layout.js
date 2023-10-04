import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
const Layout = () => {
  const showCart = useSelector(state => state.cart.showCart);
  let total = 0;
  const datas = useSelector(state => state.cart.itemList)
  
  for(let i = 0 ; i < datas.length ; i++){
    console.log(` data ke ${i} = ${ datas[i].quantity}`)
    total += datas[i].quantity * datas[i].price
  }
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems/> }
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
