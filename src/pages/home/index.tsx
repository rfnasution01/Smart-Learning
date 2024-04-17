export default function Homepage() {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-12 gap-32 px-32 py-32">
        <div className="col-span-9 bg-red-300 phones:col-span-12">Berita</div>
        <div className="col-span-3 bg-blue-300 phones:col-span-12">
          Pengumuman
        </div>
      </div>
    </div>
  )
}
