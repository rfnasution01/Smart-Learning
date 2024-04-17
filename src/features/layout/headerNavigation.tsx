import { usePathname } from '@/libs/hooks/usePathname'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

export function HeaderNavigation({ close }: { close?: () => void }) {
  const { firstPathname } = usePathname()

  const isActivePage = (item: string) => {
    if (
      firstPathname?.includes(item.toLowerCase()) ||
      (firstPathname === '' && item.toLowerCase() === 'home')
    ) {
      return true
    }
    return false
  }

  return (
    <div className="flex items-center gap-x-48 phones:flex-col phones:gap-y-24 phones:text-black">
      {['Home', 'Berita', 'Pengumuman'].map((item, idx) => (
        <Link
          to={item.includes('Home') ? '/' : `/${item.toLowerCase()}`}
          className={clsx('text-[2rem] phones:text-[2.4rem]', {
            'text-primary-shade-200': !isActivePage(item),
          })}
          key={idx}
          onClick={close}
        >
          {item}
        </Link>
      ))}
    </div>
  )
}
