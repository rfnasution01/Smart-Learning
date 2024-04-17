export type BeritaType = {
  id: string
  judul: string
  kategori: string
  seo_kategori: string
  isi: string
  hits: number
  tanggal: string
  photo: {
    keterangan: string
    gambar: string
  }
  seo: string
}

export type BeritaParams = {
  page_size: number
  page_number: number
  search?: string
  seo_kategori?: string
}

export type BeritaDetailParams = {
  seo: string
}
