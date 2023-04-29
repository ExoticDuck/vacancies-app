import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

export type PostType = {
    id: number
    title: string
    body: string
}
//https://startup-summer-2023-proxy.onrender.com

// login=sergei.stralenia@gmail.com
// password=paralect123
// client_id=2356
// client_secret=v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948
// hr=0
export const vacanciesAPI = createApi({
    reducerPath: "vacanciesAPI",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://startup-summer-2023-proxy.onrender.com' }),
    tagTypes: [],
    endpoints: (build) => ({
        fetchPassword: build.query<any, string>({
            query: (city: string = 'Moscow') => ({
                url: "/2.0/oauth2/password/",
                params: {
                    login: 'sergei.stralenia@gmail.com', 
                    password: 'paralect123',
                    client_id: 2356,
                    client_secret: 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
                    hr: 0
                }
            }),
            // providesTags: result => ['Post']
        }),
        // createPost: build.mutation<PostType, PostType>({
        //     query: (post) => ({
        //         url: '/posts',
        //         method: 'POST',
        //         body: post
        //     }),
        //     // invalidatesTags: ['Post']
        // }),
        // updatePost: build.mutation<PostType, PostType>({
        //     query: (post) => ({
        //         url: `/posts/${post.id}`,
        //         method: 'PUT',
        //         body: post
        //     }),
        //     // invalidatesTags: ['Post']
        // }),
        // deletePost: build.mutation<PostType, PostType>({
        //     query: (post) => ({
        //         url: `/posts/${post.id}`,
        //         method: 'DELETE',
        //         body: post
        //     }),
        //     // invalidatesTags: ['Post']
        // }),
    })
})
