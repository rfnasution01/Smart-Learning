import { Badge } from '@/components/Badge'
import { CardTitle } from '@/components/CardTitle'
import TimeSinceUploaded from '@/libs/helpers/timeUploaded'
import { BeritaType } from '@/libs/interface'
import { Eye, Timer } from 'lucide-react'

export function BeritaRelated({
  data,
  title,
}: {
  data: BeritaType[]
  title: string
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-white">
      <CardTitle title={title} classes="w-4/12 phones:w-6/12" />

      <div className="flex flex-1 flex-col gap-32 p-32">
        {data?.length === 0 ? (
          <span className="col-span-12 text-[2rem]">
            Pengumuman tidak ditemukan.
          </span>
        ) : (
          data?.slice(0, 5).map((item, idx) => (
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
    </div>
  )
}
