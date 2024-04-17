import {
  ActivateAccountType,
  ChangePasswordType,
  CheckNISNType,
  LoginType,
  ResponseLoginType,
} from '@/libs/interface'
import { Res, api } from '../api'

export const LoginEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    createLogin: builder.mutation<Res<ResponseLoginType>, { data: LoginType }>({
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
    getNISN: builder.query<Res<CheckNISNType>, { nisn: string }>({
      query: ({ nisn }) => ({
        url: 'nisn',
        params: {
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
  useGetNISNQuery,
} = LoginEndpoints
