import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from './operations';

const initialState = {
  id: null,
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(
        loginThunk.fulfilled,
        (state, { payload: { user, accessToken, refreshToken } }) => {
          state.id = user.id;
          state.accessToken = accessToken;
          state.refreshToken = refreshToken;
          state.isLoggedIn = true;
        }
      )
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(refreshThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(
        refreshThunk.fulfilled,
        (state, { payload: { user, accessToken, refreshToken } }) => {
          state.id = user.id;
          state.accessToken = accessToken;
          state.refreshToken = refreshToken;
          state.isLoggedIn = true;
          state.isRefreshing = false;
        }
      )
      .addMatcher(
        isAnyOf(registerThunk.pending, loginThunk.pending, logoutThunk.pending),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          registerThunk.fulfilled,
          loginThunk.fulfilled,

          logoutThunk.fulfilled
        ),
        state => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          loginThunk.rejected,
          registerThunk.rejected,
          logoutThunk.rejected,
          refreshThunk.rejected
        ),
        (state, { payload }) => {
          state.error = payload;
          state.isLoading = false;
        }
      );
  },
  selectors: {
    selectId: state => state.id,
    selectAccessToken: state => state.accessToken,
    selectRefreshToken: state => state.refreshToken,
    selectIsLoggedIn: state => state.isLoggedIn,
    selectError: state => state.error,
    selectIsLoading: state => state.isLoading,
    selectIsRefreshing: state => state.isRefreshing,
  },
});

export const {
  selectId,
  selectAccessToken,
  selectRefreshToken,
  selectIsLoggedIn,
  selectError,
  selectIsLoading,
  selectIsRefreshing,
} = userSlice.selectors;

export default userSlice.reducer;
