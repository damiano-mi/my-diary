import { POSTS, USERS } from "../const/routes";
import { Post, User } from "../types/types"
import { axiosInstance } from "./axios"

export function createPost(post: Post) {
    return axiosInstance.post(POSTS, post);
}

export function createUser(user: User) {
    return axiosInstance.post(USERS, user);
}

export function getAll(url: string): Promise<User[] | Post[]> {
    return axiosInstance.get(url);
}

export function getPost(id: string) {
    return axiosInstance.get(POSTS + id);
}

export function getAllPost(): Promise<Post[]> {
    return axiosInstance.get(POSTS);
}

export function getAllUsers(): Promise<User[]> {
    return axiosInstance.get(USERS);
}

export function deletePost(id: string) {
    return axiosInstance.delete(POSTS + id);
}

export function editPost(id: string, post: Post) {
    return axiosInstance.patch(POSTS + id, post);
}

