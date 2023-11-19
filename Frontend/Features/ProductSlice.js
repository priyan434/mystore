import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setheader } from './api';
const initialState = {
  products: localStorage.getItem('products'),
  filter: [],
  singleProduct: [],
  status: null,
  addproductstatus:null
};

const FETCH_PRODUCTS = 'products/fetch';

export const ProductsFetch = createAsyncThunk(FETCH_PRODUCTS, async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/products/getallpro');
    localStorage.setItem('products', response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
});
export const AddProduct = createAsyncThunk("products/addProduct", async (values) => {
  try {

    const response = await axios.post('http://localhost:5000/api/products/addproduct',values,setheader());
    return response.data;
  } catch (error) {
    console.error('Error in AddProduct frontend side:', error);
    throw error;
  }
});
export const DeleteProduct = createAsyncThunk("DeleteProduct", async (values) => {
  try {
    // console.log("values:"+values);
    const response = await axios.put('http://localhost:5000/api/products/deleteproduct',{  id: values  },setheader());
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
});
export const UpdateProduct = createAsyncThunk("UpdateProduct", async (values) => {
  console.log(values);
  try {
    const response = await axios.put('http://localhost:5000/api/products/updateproduct',values,setheader());
    return response.data;
  } catch (error) {
    throw error;
  }
});


const ProductSlice = createSlice({
  name: 'ProductSlice',
  initialState,
  reducers: {
  
    getSingleProduct: (state) => {
      return {
        ...state,
        singleProduct: state.products.filter((ele) => ele.id == 2),
      };
    },
    
  },
  extraReducers: {
    [ProductsFetch.pending]: (state, action) => {
      return {
        ...state,
        status: 'pending',
      };
    },
    [ProductsFetch.fulfilled]: (state, action) => {
      return {
        ...state,
        status: 'success',
        products: action.payload,
        filter: action.payload,
      };
    },
    [ProductsFetch.rejected]: (state, action) => {
      return {
        ...state,
        status: 'failed to fetch',
      };
    },
    [AddProduct.pending]: (state, action) => {
      return {
        ...state,
        addproductstatus: 'pending',
      };
    },
    [AddProduct.fulfilled]: (state, action) => {
      return {
        ...state,
        addproductstatus: 'success',  
      };
    },
    [AddProduct.rejected]: (state, action) => {
      return {
        ...state,
        addproductstatus: 'failed to add',
      };
    },
    [DeleteProduct.fulfilled]:(state,action)=>{
      return{
        ...state
      }
    }
  },
});

export const {  getSingleProduct } = ProductSlice.actions;

export default ProductSlice.reducer;
