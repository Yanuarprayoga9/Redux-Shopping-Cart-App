import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "./store/ui-slice";
let isFirstRender = true;
function App() {
  const notification = useSelector(state => state.ui.notification)
  console.log(notification)
  const cart = useSelector((state) => state.cart);
  console.log(cart)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    if(isFirstRender){
      isFirstRender=false;
      return
    }
    const sendRequest = async () => {
      dispatch(
          uiActions.showNotification({
            message: "sending request to database",
            open: true,
            type: "warning",
          })
        );
        const res = await fetch(
          "https://redux-http-f6941-default-rtdb.asia-southeast1.firebasedatabase.app/cartitems.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
          );
        const data =  await res.json()
        dispatch(
          uiActions.showNotification({
            message: "sending request success",
            open: true,
            type: "success",
          })
        );
        return data
    };

    sendRequest().catch((err) => {
      dispatch(
        uiActions.showNotification({
          message: "sending request failed",
          open: true,
          type: "error",
        })
      );
    }); // Panggil fungsi sendRequest di sini
  }, [cart,dispatch]);

  return (
    <div className="App">
      {notification && <Notification type={notification.type} message={notification.message}/>}
      {isLoggedIn ? <Layout /> : <Auth />}
    </div>
  )
}

export default App;
