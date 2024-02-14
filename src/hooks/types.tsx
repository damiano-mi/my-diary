export interface Post {
    id: string,
    title: string,
    body: string
}

export interface User{
    name: string,
    password: string,
    posts: [{
        id: string,
        title: string,
        body: string
    }]
}
export const urlUsers = "http://localhost:3030/users";
//export const urlPosts = "http://localhost:3030/posts";
