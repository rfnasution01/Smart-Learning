import { BeritaDetail, BeritaMapping, BeritaRelated } from '@/features/berita'
import { convertSlugToText } from '@/libs/helpers/formatText'
import { BeritaDetailType } from '@/libs/interface'
import { useGetBeritaDetailQuery } from '@/store/slices/beritaAPI'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Post() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const newsParam = searchParams.get('news')
  const { data } = useGetBeritaDetailQuery({ seo: newsParam })
  const [detailBerita, setDetailBerita] = useState<BeritaDetailType[]>()
  const [realtedBerita, setRelatedBerita] = useState<BeritaDetailType[]>()

  useEffect(() => {
    if (data?.data) {
      setDetailBerita(data?.data)
    }
    if (data?.data) {
      setRelatedBerita(data?.related)
    }
  }, [data?.data])

  return (
    <div className="flex flex-col p-32">
      {newsParam ? (
        <div className="grid grid-cols-12 gap-32 px-32 py-32">
          <div className="col-span-9 phones:col-span-12">
            <BeritaDetail
              data={detailBerita}
              title={convertSlugToText(newsParam)}
            />
          </div>
          <div className="col-span-3 phones:col-span-12">
            <BeritaRelated data={realtedBerita} title="Related" />
          </div>
        </div>
      ) : (
        <BeritaMapping />
      )}
    </div>
  )
}
