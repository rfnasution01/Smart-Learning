import { Input } from '@/components/ui/input'
import {
  getIdentitasSlice,
  setStateIdentitas,
} from '@/store/reducer/stateIdentitas'
import { useGetIdentitasQuery } from '@/store/slices/identitasAPI'
import { debounce } from 'lodash'
import { Bell, ChevronDown, List, Search, Settings } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ButtonGroup } from './buttonGroup'
import { HeaderNavigation } from './headerNavigation'
import { capitalizeFirstLetterFromLowercase } from '@/libs/helpers/formatText'
import Cookies from 'js-cookie'
import { useGetBiodataQuery } from '@/store/slices/biodataAPI'
import { BiodataType } from '@/libs/interface/biodataType'
import { DialogHelpers } from '@/components/ui/dialog'
import { ButtonGroupMobile } from './buttonGroupMobile'

export function HeaderLayout() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')
  const dispatch = useDispatch()
  const identitas = useSelector(getIdentitasSlice)
  const { data: identitasData } = useGetIdentitasQuery()

  const token = Cookies.get('token')
  const { data: biodataData } = useGetBiodataQuery()
  const [biodata, setBiodata] = useState<BiodataType>()

  useEffect(() => {
    if (biodataData?.data) {
      setBiodata(biodataData?.data)
    }
  }, [biodataData?.data])

  useEffect(() => {
    if (identitasData?.data) {
      dispatch(setStateIdentitas(identitasData?.data))
    }
  }, [identitasData?.data])

  const handleSearch = debounce((searchValue: string) => {
    setSearch(searchValue)
  }, 300)

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    handleSearch(value)
  }
  console.log(search)

  return (
    <div className="flex min-h-[7.6rem] flex-row items-center  justify-between gap-x-96 bg-primary-shade-500 px-32 text-white">
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
      <div className="hidden phones:block">
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
                  {capitalizeFirstLetterFromLowercase(
                    biodata?.pribadi?.nama ?? '',
                  )}
                </span>
                <span>
                  <ChevronDown size={16} />
                </span>
              </div>
            </div>
          )}
          <span onClick={() => setIsOpen(true)}>
            <List size={24} color="#fff" />
          </span>
        </div>
      </div>
      <DialogHelpers
        title={
          <h3 className="flex h-[7.6rem] items-center bg-primary-shade-500 px-24 text-[3.2rem] text-primary-shade-200">
            {identitas?.nama_aplikasi}
          </h3>
        }
        open={isOpen}
        setOpen={setIsOpen}
        noPadding
        customComponent={
          <div className="flex flex-col items-center gap-y-32">
            <HeaderNavigation close={() => setIsOpen(false)} />
            <ButtonGroupMobile />
          </div>
        }
      />
    </div>
  )
}
