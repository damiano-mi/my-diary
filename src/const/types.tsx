export interface Post {
    postId: number,
    timestamp: string,
    title: string,
    body: string,
    userId: number
}

export interface User{
    userId: number,
    name: string,
    password: string
}
