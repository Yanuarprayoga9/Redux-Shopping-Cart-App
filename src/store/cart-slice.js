import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    itemList : [],
    totalQuantity: 0 ,
    showCart : false,

}
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers: {
        addToCart(state,action){
            const newItem = action.payload;
            const existingItem = state.itemList.find((item)=> newItem.id === item.id);
            console.log(existingItem)
            if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price
            }else{
                state.itemList.push({
                    id:newItem.id,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price,
                    name:newItem.name
                })
                state.totalQuantity++;
            }
        },
        removeFromCart(){},
    }
})


export const cartActions = cartSlice.actions;
export default cartSlice;