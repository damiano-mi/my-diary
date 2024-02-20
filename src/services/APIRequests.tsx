import { Post, User } from "../types/types"
import { axiosInstance } from "./axios"

export function createPost(post: Post) {
    return axiosInstance.post("/posts", post);
}

export function createUser(user: User) {
    return axiosInstance.post("/users", user);
}

export function getAll(url: string): Promise<User[] | Post[]>{
    return axiosInstance.get(url);
}

export function getPost(id: string){
    return axiosInstance.get("/posts/" + id);
}

export function getAllPost(): Promise<Post[]> {
    return axiosInstance.get("/posts");
}

export function getAllUsers(): Promise<User[]> {
    return axiosInstance.get("/users");
}

export function deletePost(id: string) {
    return axiosInstance.delete("/posts/" + id);
}

export function editPost(id: string, post: Post) {
    return axiosInstance.patch("/posts/" + id, post);
}

