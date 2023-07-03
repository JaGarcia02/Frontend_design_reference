import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookie from "js-cookie";
import userServie from "./user_service";

const initialState = {
  user: "",
  isErrorUser: false,
  isSuccessUser: false,
  isLoadingUser: false,
  messageUser: "",
};

export const register_user = createAsyncThunk(
  "user/register",
  async (register_data, thunkAPI) => {
    try {
      return await userServie.signup(register_data);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.respons.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login_user = createAsyncThunk(
  "user/login",
  async (user_data, thunkAPI) => {
    try {
      return await userServie.login(user_data); // <--- this is the payload comming from the frontend or in the login page
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logout_user = createAsyncThunk(
  "user/logout",
  async (user_data, thunkAPI) => {
    try {
      return await userServie.logout(user_data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const userSlice = createSlice({
  name: "UserCredential",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoadingUser = false;
      state.isSuccessUser = false;
      state.isErrorUser = false;
      state.messageUser = "";
    },
  },

  extraReducers: (builder) => {
    builder
      // Login -states-
      .addCase(login_user.pending, (state) => {
        state.isLoadingUser = true;
      })
      .addCase(login_user.fulfilled, (state, action) => {
        state.isLoadingUser = false;
        state.isSuccessUser = true;
        state.user = action.payload;
      })
      .addCase(login_user.rejected, (state, action) => {
        state.isLoadingUser = false;
        state.isErrorUser = true;
        state.messageUser = action.payload;
        state.user = null;
      })
      // Logout -states-
      .addCase(logout_user.fulfilled, (state, action) => {
        state.user = null;
        state.isSuccessUser = true;
      })
      // Register -states-
      .addCase(register_user.pending, (state, action) => {
        state.isLoadingUser = true;
      })
      .addCase(register_user.fulfilled, (state, action) => {
        state.isLoadingUser = false;
        state.isSuccessUser = true;
        state.user = action.payload;
      })
      .addCase(register_user.rejected, (state, action) => {
        state.isLoadingUser = false;
        state.isErrorUser = true;
        state.messageUser = action.payload;
        state.user = null;
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
