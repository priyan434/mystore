import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductReducer, { ProductsFetch } from '../Features/ProductSlice.js'
import { configureStore } from '@reduxjs/toolkit'
import CartReducer from '../Features/CartSlice.js'
import FilterReducer, { FilterProductsFetch } from '../Features/FilterSlice.js'
import AuthReducer, { LoadUser } from '../Features/AuthSlice.js'

import { Provider } from 'react-redux'
const store=configureStore({
 reducer:{
  products:ProductReducer,
  cart:CartReducer,
 filter:FilterReducer,
 auth:AuthReducer,
 }
})
store.dispatch(ProductsFetch())
store.dispatch(FilterProductsFetch())
store.dispatch(LoadUser());
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
