import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";


function App() {
  const cartItems = useSelector((state)=>state.cart.itemList);
  console.log(cartItems);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <div className="App">
      {isLoggedIn ? <Layout/> : <Auth/>}
    </div>
  );
}

export default App;
