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
        setPosts: (state, action: PayloadAction<Post[]>) => {
            state.posts = action.payload;
        },
        clearPosts: (state) => {
            state.posts = [];
        }
    }
});

export const { setPosts, clearPosts } = postsSlice.actions;
export default postsSlice.reducer;