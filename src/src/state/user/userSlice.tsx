import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/types";

interface UserState {
  user: User,
  isLogged: boolean,
  loading: boolean
}

const initialState: UserState = {
  user: { name: "", password: "" },
  isLogged: false,
  loading: false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      sessionStorage.setItem("USER", JSON.stringify(state.user));
      state.isLogged = true;
    },
    logout: (state) => {
      state.user = { name: "", password: "" };
      sessionStorage.removeItem("USER");
      state.isLogged = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAsync.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        sessionStorage.setItem("USER", JSON.stringify(state.user));
        state.isLogged = true;
        state.loading = false;
      })
  }
});

export const loginAsync = createAsyncThunk(
  "user/loginAsync",
  async (user: User) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return user;
  }
)

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;