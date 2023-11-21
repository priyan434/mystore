import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const initialState={
cartItems:localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[],
cartCount:0,
TotalCartquantity:0,
}
const CartSlice=createSlice({
    name:"cart",
    initialState,
    reducers: {
        addtocart: (state,action) => {
          if(action.payload){
      const index=state.cartItems.findIndex((item)=>item.id==action.payload.id);
          if(index>=0){
          state.cartItems[index].count+=action.payload.count;
          }
          else{
            if(action.payload.price){
              state.cartItems.push({
                ...action.payload,"count":action.payload.count||1,
            });
            }
         
          }
          }
    
          localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
          },
          removefromcart:(state,action)=>{
            state.cartItems=state.cartItems.filter((item)=>item.id!=action.payload)
            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
            return state;
          },
          clearcart:(state)=>{
            state.cartItems=[];
            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
            return state
          },
          increasequantity:(state,action)=>{
          const index=state.cartItems.findIndex((item)=>item.id==action.payload);
          state.cartItems[index].count+=1;
          localStorage.setItem('cartItems',JSON.stringify(state.cartItems))

          },
          decreasequantity:(state,action)=>{
          const index=state.cartItems.findIndex((item)=>item.id==action.payload);
          if(state.cartItems[index].count<=1){
            state.cartItems[index].count=1;
          }
          else{
            state.cartItems[index].count-=1;
          }
          localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
         
         
          },
    }
   
  })
export const { addtocart,removefromcart,increasequantity,decreasequantity,clearcart } = CartSlice.actions
export default CartSlice.reducer;
// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// const initialState={
// cartItems:[],
// cartCount:0,
// TotalCartquantity:0,
// }
// const CartSlice=createSlice({
//     name:"cart",
//     initialState,
//     reducers: {
//         addtocart: (state,action) => {
//           const index=state.cartItems.findIndex((item)=>item.id==action.payload.id);
//           if(index>=0){
//           state.cartItems[index].count+=action.payload.count;
//           }
//           else{
//             state.cartItems.push({
//                 ...action.payload,"count":action.payload.count||1,
//             });
//           }
          
//           },
//           removefromcart:(state,action)=>{
//             state.cartItems=state.cartItems.filter((item)=>item.id!=action.payload.id)
//             localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
//             return state;
//           },
//           clearcart:(state)=>{
//             state.cartItems=[];
      
//             return state
//           },
//           increasequantity:(state,action)=>{
//           const index=state.cartItems.findIndex((item)=>item.id==action.payload);
//           state.cartItems[index].count+=1;
         

//           },
//           decreasequantity:(state,action)=>{
//           const index=state.cartItems.findIndex((item)=>item.id==action.payload);
//           if(state.cartItems[index].count<=1){
//             state.cartItems[index].count=1;
//           }
//           else{
//             state.cartItems[index].count-=1;
//           }
       
         
         
//           },
//     }
   
//   })
// export const { addtocart,removefromcart,increasequantity,decreasequantity,clearcart } = CartSlice.actions
// export default CartSlice.reducer;