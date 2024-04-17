import { CardTitle } from '@/components/CardTitle'
import { Pagination } from '@/components/Pagination'
import { Input } from '@/components/ui/input'
import { useSearch } from '@/libs/hooks/useSearch'
import { BeritaType } from '@/libs/interface'
import { useGetBeritaQuery } from '@/store/slices/beritaAPI'
import { debounce } from 'lodash'
import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { BeritaList } from './beritaList'

export function BeritaMapping() {
  const { currentPage } = useSearch()
  const pageSize = 3
  const pageNumber = currentPage ?? 1
  const [search, setSearch] = useState<string>('')
  const [berita, setBerita] = useState<BeritaType[]>()

  const { data } = useGetBeritaQuery({
    page_size: pageSize,
    page_number: pageNumber,
    search: search,
  })

  useEffect(() => {
    if (data?.data) {
      setBerita(data?.data)
    }
  }, [data?.data])

  const totalPage = Math.ceil(berita?.length ?? 0 / pageSize)

  const handleSearch = debounce((searchValue: string) => {
    setSearch(searchValue)
  }, 300)

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    handleSearch(value)
  }

  return (
    <div className="h-full rounded-2xl bg-white">
      <CardTitle title="Berita" classes="w-4/12 phones:w-6/12" />
      <div className="flex justify-end px-32 pt-32">
        <Input
          className="w-4/12 text-secondary-shade-100"
          placeholder="Search"
          prefix={<Search size={18} />}
          onChange={onSearch}
        />
      </div>
      <div className="grid grid-cols-12 gap-32 p-32">
        <BeritaList
          data={berita}
          pageSize={pageSize}
          currentPage={currentPage}
        />
      </div>
      <Pagination
        totalPage={totalPage === 0 ? 1 : totalPage}
        classes="flex justify-end px-32 pb-32"
      />
    </div>
  )
}
