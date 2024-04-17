import { Input } from '@/components/ui/input'
import {
  getIdentitasSlice,
  setStateIdentitas,
} from '@/store/reducer/stateIdentitas'
import { useGetIdentitasQuery } from '@/store/slices/identitasAPI'
import { debounce } from 'lodash'
import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ButtonGroup } from './buttonGroup'
import { HeaderNavigation } from './headerNavigation'

export function HeaderLayout() {
  const [search, setSearch] = useState<string>('')
  const dispatch = useDispatch()
  const identitas = useSelector(getIdentitasSlice)
  const { data } = useGetIdentitasQuery()
  useEffect(() => {
    if (data?.data) {
      dispatch(setStateIdentitas(data?.data))
    }
  }, [data?.data])
  const handleSearch = debounce((searchValue: string) => {
    setSearch(searchValue)
  }, 300)

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    handleSearch(value)
  }
  console.log(search)

  return (
    <div className="flex h-[7.6rem] flex-row items-center  justify-between gap-x-96 bg-primary-shade-500 px-32 text-white">
      <Link
        to="/"
        className="flex items-center gap-x-8 text-[3.2rem] text-primary-shade-200"
      >
        <img
          src={identitas?.logo ?? '/img/logo.png'}
          alt={identitas?.nama_aplikasi}
          className="w-[4rem]"
        />
        <span>{identitas?.nama_aplikasi}</span>
      </Link>
      <div className="block flex-1 phones:hidden">
        <div className="flex flex-row items-center gap-x-96 ">
          <HeaderNavigation />
          <Input
            className="flex-1 text-secondary-shade-100"
            placeholder="Search"
            prefix={<Search size={18} />}
            onChange={onSearch}
          />
          <ButtonGroup />
        </div>
      </div>
      {/* <div className="hidden phones:block" onClick={() => setIsOpen(true)}>
        <div className="flex flex-row items-center gap-x-32">
          {token && (
            <div className="flex items-center gap-x-32">
              <span>
                <Settings size={16} />
              </span>
              <span>
                <Bell size={16} />
              </span>
              <div className="flex items-center gap-x-8">
                <img
                  src="/img/logo.png"
                  alt="Profile"
                  width={18}
                  className="rounded-full"
                />
                <span className="text-[2rem]">
                  {capitalizeFirstLetterFromLowercase(username ?? '')}
                </span>
                <span>
                  <ChevronDown size={16} />
                </span>
              </div>
            </div>
          )}
          <List size={24} color="#fff" />
        </div>
      </div> */}
    </div>
  )
}
