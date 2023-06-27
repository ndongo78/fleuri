import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productApi=createApi({
    reducerPath: 'product',
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_API_URL}),
    tagTypes:["product"],
    endpoints:(builder)=>({
        getProducts: builder.query({
            query:()=>({
                url: "/api/articles"
            }),
            providesTags:["product"]
        }),
        getCategories: builder.query({
           query: ()=>({
            url:'/api/categories'
           }),
           providesTags:["product"]
        })
    })
})

export const {
    useGetProductsQuery,
    useGetCategoriesQuery
}= productApi