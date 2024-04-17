import { IdentitasDataType } from '@/libs/interface'
import { Res, api } from '../api'

export const identitasEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getIdentitas: builder.query<Res<IdentitasDataType>, void>({
      query: () => ({
        url: 'identitas',
      }),
    }),
  }),
})

export const { useGetIdentitasQuery } = identitasEndpoints
