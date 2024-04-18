import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  clearToken,
  requestGetCurrentUser,
  requestLogOut,
  requestSignIn,
  requestSignUp,
  setToken,
} from "../../services/api";

export const apiRegisterUser = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      const data = await requestSignUp(user);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const apiLoginUser = createAsyncThunk(
  "auth/login",
  async (user, thunkAPI) => {
    try {
      const data = await requestSignIn(user);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const apiRefreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    setToken(token);
    try {
      const data = await requestGetCurrentUser();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      if (!token) return false;
      return true;
    },
  }
);

export const apiLogoutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await requestLogOut();
      clearToken();
      return;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
