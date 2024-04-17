import { ListTitle } from '@/components/CardTitle'
import { Pagination } from '@/components/Pagination'
import { Input } from '@/components/ui/input'
import { BeritaList } from '@/features/berita/beritaList'
import { PengumumanKategori } from '@/features/pengumuman'
import { useSearch } from '@/libs/hooks/useSearch'
import { BeritaType } from '@/libs/interface'
import { useGetPengumumanKategoriQuery } from '@/store/slices/pengumunanAPI'
import { debounce } from 'lodash'
import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Pengumuman() {
  const { currentPage } = useSearch()
  const pageSize = 3
  const pageNumber = currentPage ?? 1
  const [search, setSearch] = useState<string>('')
  const [pengumuman, setPengumuman] = useState<BeritaType[]>()
  const [kategori, setKategori] = useState<string>('')

  const { data } = useGetPengumumanKategoriQuery({
    page_size: pageSize,
    page_number: pageNumber,
    search: search,
    seo_kategori: kategori,
  })

  useEffect(() => {
    if (data?.data) {
      setPengumuman(data?.data)
    }
  }, [data?.data])

  const totalPage = Math.ceil(pengumuman?.length ?? 0 / pageSize)

  const handleSearch = debounce((searchValue: string) => {
    setSearch(searchValue)
  }, 300)

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    handleSearch(value)
  }

  return (
    <div className="grid h-screen grid-cols-12 gap-32 p-32 phones:h-auto">
      <div className="hidden h-auto phones:col-span-12 phones:block">
        <div className="flex flex-col gap-y-24 rounded-lg bg-white p-32 ">
          <Input
            className="w-full text-secondary-shade-100"
            placeholder="Search"
            prefix={<Search size={18} />}
            onChange={onSearch}
          />
          <PengumumanKategori setKategori={setKategori} />
        </div>
      </div>
      <div className="col-span-2 block phones:hidden">
        <div className="flex flex-col gap-y-24 rounded-lg bg-white p-32 ">
          <Input
            className="w-full text-secondary-shade-100"
            placeholder="Search"
            prefix={<Search size={18} />}
            onChange={onSearch}
          />
          <PengumumanKategori setKategori={setKategori} />
        </div>
      </div>
      <div className="col-span-10 flex h-full flex-col gap-y-32 rounded-lg bg-white p-32 phones:col-span-12">
        <div className="flex flex-1 flex-col gap-y-24">
          <ListTitle title="Pengumuman" />
          <div className="grid grid-cols-12 gap-32">
            <BeritaList
              data={pengumuman}
              pageSize={pageSize}
              currentPage={currentPage}
            />
          </div>
        </div>
        {totalPage !== 0 && (
          <Pagination
            totalPage={totalPage === 0 ? 1 : totalPage}
            classes="flex justify-end px-32 pb-32"
          />
        )}
      </div>
    </div>
  )
}
