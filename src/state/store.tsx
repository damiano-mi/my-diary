import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./user/userSlice"
import postReducer from "./post/postSlice"
import postsReducer from "./posts/postsSlice"
import { setupListeners } from "@reduxjs/toolkit/query"
import { serverAPI } from "../services/serverAPI"

export const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
    posts: postsReducer,
    [serverAPI.reducerPath]: serverAPI.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(serverAPI.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch