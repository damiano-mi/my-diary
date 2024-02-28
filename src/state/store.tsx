import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./user/userSlice"
import postReducer from "./post/postSlice"
import postsReducer from "./posts/postsSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
    posts: postsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch