import { CardTitle } from '@/components/CardTitle'
import { useSearch } from '@/libs/hooks/useSearch'
import { BeritaDetailType } from '@/libs/interface'

import { BeritaPost } from './beritaPost'

export function BeritaDetail({
  data,
  title,
}: {
  data: BeritaDetailType[]
  title: string
}) {
  const { currentPage } = useSearch()
  const pageSize = 3

  return (
    <div className="h-full rounded-2xl bg-white">
      <CardTitle title={title} classes="w-4/12 phones:w-6/12" />

      <div className="grid grid-cols-12 gap-32 p-32">
        <BeritaPost data={data} pageSize={pageSize} currentPage={currentPage} />
      </div>
    </div>
  )
}
