import { BeritaMapping } from '@/features/berita'
import { Footer } from '@/features/footer'
import { PengumumanMapping } from '@/features/pengumuman'
import { Services } from '@/features/services'

export default function Homepage() {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-12 gap-32 px-32 py-32">
        <div className="col-span-9 phones:col-span-12">
          <BeritaMapping />
        </div>
        <div className="col-span-3 phones:col-span-12">
          <PengumumanMapping />
        </div>
      </div>
      <Services />
      <Footer />
    </div>
  )
}
