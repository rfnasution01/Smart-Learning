import { Dispatch, SetStateAction } from 'react'

export function PengumumanKategori({
  setKategori,
}: {
  setKategori: Dispatch<SetStateAction<string>>
}) {
  return (
    <div className="flex flex-col gap-y-24">
      <span className="text-[2.4rem] font-bold">Kategori</span>
      <ul className="ml-32 list-disc">
        <li
          className="hover:cursor-pointer hover:text-primary"
          onClick={() => setKategori('pengumuman')}
        >
          Pengumuman
        </li>
      </ul>
    </div>
  )
}
