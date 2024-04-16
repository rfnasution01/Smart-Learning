import { usePathname } from '@/libs/hooks/usePathname'
import { Outlet } from 'react-router-dom'

export default function LoginLayout() {
  const { secondPathname } = usePathname()

  return (
    <div className="grid h-screen grid-cols-12">
      <div className={`col-span-6 block phones:hidden`}>
        <img
          src={
            secondPathname?.includes('registrasi')
              ? '/img/registrasi-bg.jpg'
              : '/img/login-bg.jpg'
          }
          alt="login"
          className="h-screen w-full object-cover"
          style={{
            filter: secondPathname?.includes('registrasi')
              ? 'blur(3px)'
              : 'hue-rotate(40deg)',
          }}
        />
      </div>
      <div
        className={
          'scrollbar col-span-6 max-h-full overflow-y-auto border-l-2 bg-background phones:col-span-12'
        }
      >
        <Outlet />
      </div>
    </div>
  )
}
