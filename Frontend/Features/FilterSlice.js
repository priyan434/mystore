import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

export const FilterProductsFetch = createAsyncThunk('products/fetch', async () => {
    const response = await axios.get('http://localhost:5000/api/products/getallpro');
    return response.data;
  });


const initialState={
  products: [],
  filter: [],
    status:null
}

const filterSlice=createSlice({
    name:'filter',
    initialState,
    reducers:{
      fetchbycat: (state, action) => {
        if (action.payload === "All") {
          return {
            ...state,
            filter: state.products,
          };
        } else {
          return {
            ...state,
            filter: state.products.filter((ele) => ele.category === action.payload),
          };
        }
      },
      clearfilter: (state) => {
        return {
          ...state,
          filter: state.products,
        };
      },
      sort: (state) => {
        state.filter.sort((a, b) => b.rating - a.rating);
      },
      sortPriceHighToLow:(state)=>{
        state.filter.sort((a, b) => b.price - a.price);
      },
      sortPriceLowToHigh:(state)=>{
        state.filter.sort((a, b) => a.price - b.price);
      },
      sortbyprice: (state, action) => {
        state.filter = state.products.filter(item => item.price > 0 && item.price <= action.payload);
      }
      
      
    
    },
    extraReducers: {
        [FilterProductsFetch.pending]: (state, action) => {
          state.status = 'pending';
        },
        [FilterProductsFetch.fulfilled]: (state, action) => {
          state.status = 'success';
          state.products = action.payload;
          state.filter=action.payload;
        },
        [FilterProductsFetch.rejected]: (state, action) => {
          state.status = 'failed to fetch';
        },
      },

})
export const { fetchbycat, clearfilter, sort,sortPriceHighToLow,sortPriceLowToHigh,sortbyprice }=filterSlice.actions
export default filterSlice.reducer;