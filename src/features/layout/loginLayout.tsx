import { usePathname } from '@/libs/hooks/usePathname'
import clsx from 'clsx'
import { Link, Outlet } from 'react-router-dom'

export default function LoginLayout() {
  const { secondPathname } = usePathname()

  return (
    <div className="grid h-screen grid-cols-12">
      <div className={`col-span-6 block phones:hidden`}>
        <div className={`relative col-span-6 block phones:hidden`}>
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
          <div className="text-xl absolute left-[3vw] top-[3vh] p-4 font-roboto text-[2.4rem] font-bold">
            <Link to="/" className="flex items-center gap-x-8">
              <img src="/img/logo.png" alt="logo" className="w-[7rem]" />
              <span
                className={clsx('', {
                  'text-black hover:text-slate-400':
                    !secondPathname?.includes('registrasi'),
                  'text-slate-300 hover:text-slate-50':
                    secondPathname?.includes('registrasi'),
                })}
              >
                CBT
              </span>
            </Link>
          </div>
        </div>
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
