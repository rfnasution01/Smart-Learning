import TimeSinceUploaded from '@/libs/helpers/timeUploaded'
import { BeritaDetailType } from '@/libs/interface'
import clsx from 'clsx'
import { Eye } from 'lucide-react'
import { useEffect, useState } from 'react'

export function BeritaPost({
  data,
  currentPage,
  pageSize,
}: {
  data: BeritaDetailType[]
  currentPage: number
  pageSize: number
}) {
  const [id, setId] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setId((prevId) => (prevId + 1) % data?.length) // Ganti angka 3 sesuai dengan jumlah id yang ada
    }, 3000) // Waktu dalam milidetik (3 detik)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {data?.length === 0 ? (
        <span className="col-span-12 text-center text-[2rem]">
          ----- Berita tidak ditemukan -----
        </span>
      ) : (
        data
          ?.slice(currentPage * pageSize - pageSize, currentPage * pageSize)
          .map((item, idx) => (
            <div
              className="col-span-12 transform shadow-md transition-transform duration-300 hover:scale-95 hover:cursor-pointer"
              key={idx}
            >
              <img
                src={item?.photo?.[id]?.gambar}
                alt={item?.photo?.[id]?.keterangan}
                className="h-[30vh] w-full rounded-md"
              />
              <div className="flex flex-col gap-y-16 p-16">
                <div
                  className={clsx('flex items-center gap-x-8 border-l-4 px-8', {
                    'border-red-500': idx === 0,
                    'border-blue-500': idx === 1,
                    'border-green-500': idx === 2,
                  })}
                >
                  {item?.kategori}
                  <span className="font-light italic">
                    <TimeSinceUploaded uploadTime={item?.tanggal} />
                  </span>
                </div>
                <div className="flex flex-col gap-y-8">
                  <span className="text-[2rem] font-bold">{item?.judul}</span>
                  <span
                    className={`font-light`}
                    dangerouslySetInnerHTML={{ __html: item?.isi }}
                  />

                  <div className="flex items-center gap-4">
                    <span>
                      <Eye size={16} />
                    </span>
                    <span>{item?.hits} Views</span>
                  </div>
                </div>
              </div>
            </div>
          ))
      )}
    </>
  )
}
