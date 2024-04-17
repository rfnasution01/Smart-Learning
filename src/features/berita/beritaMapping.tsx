import { Badge } from '@/components/Badge'
import { CardTitle } from '@/components/CardTitle'
import { Pagination } from '@/components/Pagination'
import { Input } from '@/components/ui/input'
import TimeSinceUploaded from '@/libs/helpers/timeUploaded'
import { useSearch } from '@/libs/hooks/useSearch'
import { BeritaType } from '@/libs/interface'
import { useGetBeritaQuery } from '@/store/slices/beritaAPI'
import { debounce } from 'lodash'
import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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

  const totalPage = Math.ceil(berita?.length ?? 1 / pageSize)

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
        {berita.length === 0 ? (
          <span className="col-span-12 text-[2rem]">
            Berita tidak ditemukan.
          </span>
        ) : (
          berita
            ?.slice(currentPage * pageSize - pageSize, currentPage * pageSize)
            .map((item, idx) => (
              <div
                className="col-span-4 transform shadow-md transition-transform duration-300 hover:scale-105 hover:cursor-pointer phones:col-span-12"
                key={idx}
              >
                <img
                  src={item?.photo?.gambar}
                  alt={item?.photo?.keterangan}
                  className="h-[30vh] w-full rounded-md"
                />
                <div className="flex flex-col gap-y-16 p-16">
                  <Badge variant="general">
                    <span>{item?.kategori}</span>
                  </Badge>
                  <div className="flex flex-col gap-y-8">
                    <span className="text-[2rem] font-bold">{item?.judul}</span>
                    <span
                      className={`line-clamp-3 font-light`}
                      dangerouslySetInnerHTML={{ __html: item?.isi }}
                    />

                    <div className="flex items-center justify-between">
                      <span className="font-light italic">
                        <TimeSinceUploaded uploadTime={item?.tanggal} />
                      </span>
                      <Link
                        to={`berita?${item?.seo}`}
                        className="text-primary-shade-500 hover:cursor-pointer hover:text-primary-shade-700"
                      >
                        Baca Selengkapnya
                      </Link>
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
