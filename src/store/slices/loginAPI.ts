import {
  ActivateAccountType,
  ChangePasswordType,
  LoginType,
} from '@/libs/interface'
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
    getActivate: builder.query<void, ActivateAccountType>({
      query: ({ token, nisn }) => ({
        url: 'verifikasi_email',
        params: {
          token,
          nisn,
        },
      }),
    }),
  }),
})

export const {
  useCreateLoginMutation,
  useCreateNewPasswordMutation,
  useGetActivateQuery,
} = LoginEndpoints
