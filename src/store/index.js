import cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";

const { configureStore } = require("@reduxjs/toolkit");
const { default: authSlice } = require("./auth-slice");

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    ui: uiSlice.reducer
  },
});
export default store;
