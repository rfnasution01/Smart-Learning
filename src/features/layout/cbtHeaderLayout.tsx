import { convertToSlug } from '@/libs/helpers/formatText'
import { usePathname } from '@/libs/hooks/usePathname'
import { BiodataType } from '@/libs/interface/biodataType'
import { useGetBiodataQuery } from '@/store/slices/biodataAPI'
import clsx from 'clsx'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function CBTHeaderLayout() {
  const { data: biodataData } = useGetBiodataQuery()
  const [biodata, setBiodata] = useState<BiodataType>()

  useEffect(() => {
    if (biodataData?.data) {
      setBiodata(biodataData?.data)
    }
  }, [biodataData?.data])

  const { secondPathname } = usePathname()

  const isActivePage = (item: string) => {
    if (
      secondPathname?.includes(convertToSlug(item).toLowerCase()) ||
      (secondPathname === undefined && item.toLowerCase() === 'home')
    ) {
      return true
    }
    return false
  }

  return (
    <div className="flex flex-col gap-y-32">
      <div className="flex min-h-[7.6rem] items-center bg-primary-shade-500 px-32 font-roboto text-[2.4rem] uppercase tracking-1.5 text-white">
        <h3>Computer Based Test</h3>
      </div>
      <div className="flex items-center gap-x-32 px-32">
        <div className="scrollbar flex w-10/12 items-center gap-x-32 overflow-x-auto phones:w-7/12">
          {[
            'Home',
            'Account Setting',
            'Pengumuman',
            'Percobaan',
            'Ujian',
            'Keluar',
          ].map((item, idx) => (
            <Link
              to={item.includes('Keluar') ? '/login' : convertToSlug(item)}
              className={clsx('text-nowrap text-[2rem] phones:text-[2.4rem]', {
                'text-primary-shade-500': isActivePage(item),
              })}
              onClick={() => {
                if (item.includes('Keluar')) {
                  Cookies.remove('token')
                }
              }}
              key={idx}
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="flex w-2/12 items-center justify-end text-[2rem] phones:w-5/12 phones:text-[2.4rem]">
          Hello,{' '}
          <span className="font-bold">{biodata?.pribadi?.nama ?? 'John'}</span>{' '}
          !
        </div>
      </div>
      <hr className="w-full border border-primary" />
    </div>
  )
}
