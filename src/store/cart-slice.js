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
        removeFromCart(state,action){
            const itemByid = action.payload;
            const existingItem = state.itemList.find(item=>item.id === itemByid.id);
            console.log(existingItem,'remove test')
            if(existingItem){
                existingItem.quantity--;
                console.log(existingItem.totalPrice);
                existingItem.totalPrice = existingItem.totalPrice - itemByid.price;
                const findId = state.itemList.findIndex(item=>item.id === itemByid.id)

                console.log(state.itemList[findId].quantity,'state.itemList.quantity')
                if(state.itemList.quantity === 0){
                    state.itemList.splice(findId,1);
                }
            }
            

        },
        showCart(state){
            state.showCart = !state.showCart;
            console.log('showcart',state.showCart)
        }
    }
})


export const cartActions = cartSlice.actions;
export default cartSlice;