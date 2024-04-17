import { BeritaDetailParams, BeritaParams, BeritaType } from '@/libs/interface'
import { Res, api } from '../api'

export const pengumumanEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getPengumuman: builder.query<Res<BeritaType[]>, BeritaParams>({
      query: ({ page_size, page_number, search }) => ({
        url: 'pengumuman',
        params: {
          page_size,
          page_number,
          ...(search !== null && { search }),
        },
      }),
    }),
    getPengumumanKategori: builder.query<Res<BeritaType[]>, BeritaParams>({
      query: ({ page_size, page_number, search, seo_kategori }) => ({
        url: 'pengumuman/kategori',
        params: {
          page_size,
          page_number,
          ...(seo_kategori !== null && { seo_kategori }),
          ...(search !== null && { search }),
        },
      }),
    }),
    getPengumumanDetail: builder.query<Res<BeritaType>, BeritaDetailParams>({
      query: ({ seo }) => ({
        url: 'pengumuman/detail',
        params: {
          ...(seo !== null && { seo }),
        },
      }),
    }),
  }),
})

export const {
  useGetPengumumanQuery,
  useGetPengumumanKategoriQuery,
  useGetPengumumanDetailQuery,
} = pengumumanEndpoints
