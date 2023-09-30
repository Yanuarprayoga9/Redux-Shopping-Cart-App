import cartSlice from "./cart-slice";

const { configureStore } = require("@reduxjs/toolkit");
const { default: authSlice } = require("./auth-slice");

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
  },
});
export default store;
