import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // Fixed the import statement for jwtDecode

const initialState = {
  token: localStorage.getItem('token'),
  name: '',
  email: '',
  _id: '',
  isAdmin:"",
  registerStatus: '',
  registerError: '',
  loginStatus: '', // Changed LoginStatus to loginStatus for consistency
  loginError: '', // Changed LoginError to loginError for consistency
  userLoaded: '',
};

export const registerUser = createAsyncThunk('auth/registerUser', async (values, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:5000/api/user/register', {
      name: values.name,
      email: values.email,
      password: values.password,
    });

    const token = response.data; // Assuming the token is returned as response.data.token
    console.log(token);
    localStorage.setItem('token', token);
    return token;
  } catch (error) {
    console.log(error.response.data);
    return rejectWithValue(error.response.data);
  }
});

export const login = createAsyncThunk('auth/login', async (values, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:5000/api/user/login', {
      email: values.email,
      password: values.password,
    });

    const token = response.data; // Assuming the token is returned as response.data.token
    localStorage.setItem('token', token);
    return token;
  } catch (error) {
    console.log(error.response.data);
    return rejectWithValue(error.response.data);
  }
});

const AuthSlice = createSlice({
  name: 'authslice',
  initialState,
  reducers: {
    LoadUser: (state) => {
      const token = state.token;
      if (token) {
        const user = jwtDecode(token);
        return {
          ...state,
          token,
          name: user.name,
          _id: user._id,
          email: user.email,
          isAdmin:user.isAdmin,
          userLoaded: true,
        };
      }
      return state; // Return the original state if no token is found
    },
    LogOutUser: (state, action) => {
      localStorage.removeItem('token');
      return {
        ...state,
        token: '',
        name: '',
        email: '',
        _id: '',
        isAdmin:"",
        registerStatus: '',
        registerError: '',
        loginStatus: '',
        loginError: '',
        userLoaded: false,
      };
    },
  },
  extraReducers: {
    [registerUser.pending]: (state, action) => {
      return { ...state, registerStatus: 'pending' };
    },
    [registerUser.fulfilled]: (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        return {
          ...state,
          token: action.payload,
          name: user.name,
          _id: user._id,
          email: user.email,
          isAdmin:"",
          registerStatus: 'success',
        };
      }
      return state; // Return the original state if the registration fails
    },
    [registerUser.rejected]: (state, action) => {
      return {
        ...state,
        registerStatus: 'rejected',
        registerError: action.payload,
      };
    },
    [login.pending]: (state, action) => {
      return { ...state, loginStatus: 'pending' };
    },
    [login.fulfilled]: (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        return {
          ...state,
          token: action.payload,
          name: user.name,
          _id: user._id,
          email: user.email,
          isAdmin:user.isAdmin,
          loginStatus: 'success',
        };
      }
      return state; // Return the original state if the login fails
    },
    [login.rejected]: (state, action) => {
      return {
        ...state,
        loginStatus: 'rejected',
        loginError: action.payload,
      };
    },
  },
});

export const { LoadUser, LogOutUser } = AuthSlice.actions;

export default AuthSlice.reducer;
