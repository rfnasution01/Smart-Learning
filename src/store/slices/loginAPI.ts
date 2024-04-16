import { ChangePasswordType, LoginType } from '@/libs/interface'
import { api } from '../api'

export const LoginEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    createLogin: builder.mutation<void, { data: LoginType }>({
      query: ({ data }) => ({
        url: `login`,
        method: 'POST',
        body: data,
      }),
    }),
    createNewPassword: builder.mutation<void, { data: ChangePasswordType }>({
      query: ({ data }) => ({
        url: `change_password`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const { useCreateLoginMutation, useCreateNewPasswordMutation } =
  LoginEndpoints
