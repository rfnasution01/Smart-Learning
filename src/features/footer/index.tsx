import { getIdentitasSlice } from '@/store/reducer/stateIdentitas'
import { Facebook, Instagram, Phone, Youtube } from 'lucide-react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export function Footer() {
  const identitas = useSelector(getIdentitasSlice)

  return (
    <footer className="flex flex-col items-center justify-center gap-y-32 bg-primary-shade-500 p-64 text-white">
      <div className="flex items-center gap-x-32">
        <Link
          to={identitas?.fb}
          className="p-4 hover:rounded-md hover:bg-white hover:text-primary-shade-500"
        >
          <Facebook />
        </Link>
        <Link
          to={identitas?.ig}
          className="p-4 hover:rounded-md hover:bg-white hover:text-primary-shade-500"
        >
          <Instagram />
        </Link>
        <Link
          to={identitas?.wa}
          className="p-4 hover:rounded-md hover:bg-white hover:text-primary-shade-500"
        >
          <Phone />
        </Link>
        <Link
          to={identitas?.yt}
          className="p-4 hover:rounded-md hover:bg-white hover:text-primary-shade-500"
        >
          <Youtube />
        </Link>
      </div>
      <span className="text-[2rem] font-semibold">
        &copy; 2024 Copyright By {identitas?.instansi}
      </span>
    </footer>
  )
}
