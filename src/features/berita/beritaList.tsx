import TimeSinceUploaded from '@/libs/helpers/timeUploaded'
import { BeritaType } from '@/libs/interface'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

export function BeritaList({
  data,
  currentPage,
  pageSize,
}: {
  data: BeritaType[]
  currentPage: number
  pageSize: number
}) {
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
              className="col-span-4 transform shadow-md transition-transform duration-300 hover:scale-105 hover:cursor-pointer phones:col-span-12"
              key={idx}
            >
              <img
                src={item?.photo?.gambar}
                alt={item?.photo?.keterangan}
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
                    className={`line-clamp-3 font-light`}
                    dangerouslySetInnerHTML={{ __html: item?.isi }}
                  />

                  <div className="flex items-center justify-between">
                    <Link
                      to={`/post?news=${item?.seo}`}
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
    </>
  )
}
