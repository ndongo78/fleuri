import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productApi=createApi({
    reducerPath: 'product',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000/'}),
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