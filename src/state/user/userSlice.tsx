import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/types";

interface UserState {
  user: User,
  isLogged: boolean
}

const initialState: UserState = {
  user: { name: "", password: "" },
  isLogged: false
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
  }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;