import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiAuth, clearToken, setToken } from '../../api/api';

export const registerThunk = createAsyncThunk(
  'register',
  async (credentials, thunkAPI) => {
    try {
      await apiAuth.post('/register', credentials);
    } catch (error) {
      if (error.request.status === 409) {
        return thunkAPI.rejectWithValue('Email is already in use.');
      }

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'login',
  async (credentials, thunkAPI) => {
    try {
      const response = await apiAuth.post('/login', credentials);
      setToken(response.data.accessToken);
      return response.data;
    } catch (error) {
      if (error.request.status === 401) {
        return thunkAPI.rejectWithValue(
          "Email doesn't exist or password is incorrect. Please try again."
        );
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const refreshThunk = createAsyncThunk('refresh', async (_, thunkAPI) => {
//   const { auth } = thunkAPI.getState();

//   const refreshToken = auth.refreshToken;

//   if (!refreshToken) {
//     return thunkAPI.rejectWithValue('No refresh token.');
//   }

//   try {
//     const { data } = await axios.post('/api/refresh', { refreshToken });
//     setToken(data.accessToken);
//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

export const refreshThunk = createAsyncThunk('refresh', async (_, thunkApi) => {
  const savedToken = thunkApi.getState().auth.token;
  if (!savedToken) {
    return thunkApi.rejectWithValue('Token is not exist');
  }
  try {
    setToken(savedToken);
    const { data } = await apiAuth.get('users/current');
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logoutThunk = createAsyncThunk(
  'logout',
  async (refreshToken, thunkAPI) => {
    try {
      await apiAuth.post('/users/logout', refreshToken);
      clearToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
