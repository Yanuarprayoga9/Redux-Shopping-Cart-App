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
        removeFromCart(state,action){
            const itemByid = action.payload;
            const existingItem = state.itemList.find(item=>item.id === itemByid.id);
            if(existingItem){
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - itemByid.price;
                const findId = state.itemList.findIndex(item=>item.id === itemByid.id)
                        if(state.itemList[findId].quantity === 0){
                    state.itemList.splice(findId,1);
                    if(state.itemList.length === 0 ){
                        state.showCart = false;
                        state.totalQuantity=0;
                    }
                }
            }
            

        },
        showCart(state){
            state.showCart = !state.showCart;
        }
    }
})


export const cartActions = cartSlice.actions;
export default cartSlice;