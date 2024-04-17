import { Button } from '@/components/Button'
import { Bell, ChevronDown, Settings } from 'lucide-react'
import Cookies from 'js-cookie'
import { capitalizeFirstLetterFromLowercase } from '@/libs/helpers/formatText'
import { useGetBiodataQuery } from '@/store/slices/biodataAPI'
import { useEffect, useState } from 'react'
import { BiodataType } from '@/libs/interface/biodataType'
import { useNavigate } from 'react-router-dom'

export function ButtonGroup() {
  const navigate = useNavigate()
  const token = Cookies.get('token')
  const { data } = useGetBiodataQuery()
  const [biodata, setBiodata] = useState<BiodataType>()

  useEffect(() => {
    if (data?.data) {
      setBiodata(data?.data)
    }
  }, [data?.data])

  return (
    <div className="flex items-center gap-x-32">
      {token ? (
        <>
          <span className="hover:cursor-pointer hover:text-slate-300">
            <Settings size={16} />
          </span>
          <span className="hover:cursor-pointer hover:text-slate-300">
            <Bell size={16} />
          </span>
          <div className="flex items-center gap-x-8">
            <img
              src="/img/logo.png"
              alt="Profile"
              width={28}
              className="rounded-full"
            />
            <span className="text-[2rem]">
              {capitalizeFirstLetterFromLowercase(
                biodata?.pribadi?.nama ?? 'John',
              )}
            </span>
            <span>
              <ChevronDown size={16} />
            </span>
          </div>
          <Button
            variant="outlined-white"
            classes="text-[1.8rem] min-w-[11rem]"
            onClick={() => {
              Cookies.remove('token')
              location.reload()
            }}
          >
            Logout
          </Button>
        </>
      ) : (
        <>
          <Button
            variant="outlined-white"
            classes="text-[1.8rem] min-w-[11rem]"
            onClick={() => {
              navigate('/login')
            }}
          >
            Login
          </Button>
          <Button
            variant="solid-primary"
            classes="text-[1.8rem] min-w-[11rem]"
            onClick={() => {
              navigate('/login/registrasi')
            }}
          >
            Signup
          </Button>
        </>
      )}
    </div>
  )
}
