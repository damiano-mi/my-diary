import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Post } from "../../types/types";

interface PostsState {
    posts: Post[]
}

const initialState: PostsState = {
    posts: []
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setCurrentPosts: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload;
        },
    }
});

export const { setCurrentPosts } = postsSlice.actions;
export default postsSlice.reducer;