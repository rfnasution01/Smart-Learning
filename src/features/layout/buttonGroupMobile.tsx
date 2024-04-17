import { Button } from '@/components/Button'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

export function ButtonGroupMobile() {
  const token = Cookies.get('token')
  const navigate = useNavigate()

  return (
    <div className="flex w-full flex-col gap-y-24">
      {token ? (
        <Button
          variant="solid-primary"
          classes="text-[2rem]"
          onClick={() => {
            Cookies.remove('token')
            location.reload()
          }}
        >
          Logout
        </Button>
      ) : (
        <>
          <Button
            variant="solid-primary"
            classes="text-[2rem]"
            onClick={() => {
              navigate('/login')
            }}
          >
            Login
          </Button>
          <Button
            classes="text-[2rem]"
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
