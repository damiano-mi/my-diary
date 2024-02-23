import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Post } from "../../types/types";

interface PostState {
    post: Post
}

const initialState: PostState = {
    post: { timestamp: "", title: "", body: "", author: "" }
};

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setPost: (state, action: PayloadAction<Post>) => {
            state.post = action.payload;
        },
        clearPost: (state) => {
            state.post.body = "";
            state.post.title = "";
        },
        setAuthorPost: (state, action: PayloadAction<string>) => {
            state.post.author = action.payload;
        }
    }
});

export const { setPost, clearPost, setAuthorPost } = postSlice.actions;
export default postSlice.reducer;