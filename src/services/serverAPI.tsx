import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { POSTS, USERS } from '../const/routes';
import { Post, User } from '../types/types';

export const serverAPI = createApi({
    reducerPath: 'serverAPI',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    tagTypes: ['Posts'],
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => USERS
        }),
        getUserByName: builder.query<User, string>({
            query: (user: string) => USERS + user
        }),
        getPosts: builder.query<Post[], void>({
            query: () => POSTS,
            providesTags: ['Posts']
        }),
        createPost: builder.mutation({
            query: (post: Post) => ({
                url: POSTS,
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['Posts'],
        }),
        editPost: builder.mutation({
            query: ({ id, post }) => ({
                url: POSTS + id,
                method: 'PATCH',
                body: post
            }),
            invalidatesTags: ['Posts'],
        }),
        createUser: builder.mutation({
            query: body => ({
                url: USERS,
                method: 'POST',
                body
            })
        }),
        deletePost: builder.mutation<{ success: boolean; id: string }, string>({
            query: (id) => ({
                url: POSTS + id,
                method: 'DELETE',
            }),
            invalidatesTags: ['Posts'],
        }),
    }),
});

export const {
    useGetUserByNameQuery,
    useGetUsersQuery,
    useCreateUserMutation,
    useGetPostsQuery,
    useCreatePostMutation,
    useEditPostMutation,
    useDeletePostMutation
} = serverAPI
