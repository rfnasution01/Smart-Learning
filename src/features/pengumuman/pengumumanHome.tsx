import { Badge } from '@/components/Badge'
import { CardTitle } from '@/components/CardTitle'
import { Pagination } from '@/components/Pagination'
import { Input } from '@/components/ui/input'
import TimeSinceUploaded from '@/libs/helpers/timeUploaded'
import { useSearch } from '@/libs/hooks/useSearch'
import { BeritaType } from '@/libs/interface'
import { useGetPengumumanQuery } from '@/store/slices/pengumunanAPI'
import { debounce } from 'lodash'
import { Eye, Search, Timer } from 'lucide-react'
import { useEffect, useState } from 'react'

export function PengumumanMapping() {
  const { currentPage } = useSearch()
  const pageSize = 3
  const pageNumber = currentPage ?? 1
  const [search, setSearch] = useState<string>('')
  const [pengumuman, setPengumuman] = useState<BeritaType[]>()

  const { data } = useGetPengumumanQuery({
    page_size: pageSize,
    page_number: pageNumber,
    search: search,
  })

  useEffect(() => {
    if (data?.data) {
      setPengumuman(data?.data)
    }
  }, [data?.data])

  const totalPage = Math.ceil(pengumuman?.length ?? 1 / pageSize)

  const handleSearch = debounce((searchValue: string) => {
    setSearch(searchValue)
  }, 300)

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    handleSearch(value)
  }

  return (
    <div className="flex h-full flex-col rounded-2xl bg-white">
      <CardTitle title="Pengumuman" classes="w-4/12 phones:w-6/12" />
      <div className="flex justify-end px-32 pt-32">
        <Input
          className="w-6/12 text-secondary-shade-100"
          placeholder="Search"
          prefix={<Search size={18} />}
          onChange={onSearch}
        />
      </div>
      <div className="flex flex-1 flex-col gap-32 p-32">
        {pengumuman?.length === 0 ? (
          <span className="col-span-12 text-[2rem]">
            Pengumuman tidak ditemukan.
          </span>
        ) : (
          pengumuman
            ?.slice(currentPage * pageSize - pageSize, currentPage * pageSize)
            .map((item, idx) => (
              <div
                className="flex transform items-center gap-x-16 p-16 shadow-md transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
                key={idx}
              >
                <img
                  src={item?.photo?.gambar}
                  alt={item?.photo?.keterangan}
                  className="h-[5rem] w-[5rem] rounded-full"
                />
                <div className="flex flex-1 flex-col gap-y-8">
                  <span className="text-[2rem] font-bold">{item?.judul}</span>
                  <Badge variant="general">
                    <span className="text-[1rem]">{item?.kategori}</span>
                  </Badge>
                  <div className="flex items-center justify-between ">
                    <div className="flex items-center gap-x-2 ">
                      <span>
                        <Timer size={12} />
                      </span>
                      <span className="text-[1.4rem] font-light italic">
                        <TimeSinceUploaded uploadTime={item?.tanggal} />
                      </span>
                    </div>
                    <div className="flex items-center gap-x-2 ">
                      <span>
                        <Eye size={12} />
                      </span>
                      <span className="font-light italic">
                        {item?.hits} Views
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
        )}
      </div>

      <Pagination
        totalPage={totalPage}
        classes="flex justify-end px-32 pb-32"
      />
    </div>
  )
}
