import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";




export const authApi=createApi({
  reducerPath:"api",
  baseQuery:fetchBaseQuery({baseUrl:import.meta.env.VITE_API_URL}),
  tagTypes:["auth"],
  endpoints:(builder)=>({
     userInfos: builder.query({
      query:(token)=> ({
       url:"api/users/me",
       method:"GET",
       headers: {
        Authorization: `Bearer ${token}`,
      },
      }),
      providesTags:["auth"]
     }),
     login:builder.mutation({
      query:(user)=>({
        url:"api/users/login",
        method:"POST",
        body:user,
      }) ,
      invalidatesTags:["auth"]
     }),
    register:builder.mutation({
      query:(user)=>({
        url:"api/users",
        method:"POST",
        body:user
      }) ,
      invalidatesTags:["auth"]
     }),
      updateUser:builder.mutation({
        query:({id,token,userData})=>({
            url:`api/users/${id}`,
            method:"PUT",
            body:userData,
            headers: {
                Authorization: `Bearer ${token}`,
              },
        }),
        invalidatesTags:["auth"]
     }),
     deleteUser:builder.mutation({
        query:({id,token})=>({
            url:`api/users/${id}`,
            method:"DELETE",
            body:id,
            headers: {
                Authorization: `Bearer ${token}`,
              },
        }),
        invalidatesTags:["auth"]
     }),
     validateCode:builder.mutation({
      query:({codeSecret,token})=>({
        url:"api/users/verification",
        method:"POST",
        body:{codeSecret},
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }) ,
      invalidatesTags:["auth"]
     }),
     resetPassword:builder.mutation({
      query:({email,token})=>({
        url:"api/users/resetPassword",
        method:"POST",
        body:{email},
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }) ,
      invalidatesTags:["auth"]
     })
  })
})

export const {
  useLoginMutation,
  useUserInfosQuery,
  useRegisterMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useValidateCodeMutation,
  useResetPasswordMutation
}=authApi