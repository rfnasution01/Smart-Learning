import { Outlet } from 'react-router-dom'

export default function LoginLayout() {
  return (
    <div className="grid h-screen grid-cols-12">
      <div className={`col-span-6 block phones:hidden`}>
        <img
          src="/img/login-bg.jpg"
          alt="login"
          className="h-screen w-full object-cover"
          style={{
            filter: 'hue-rotate(40deg)',
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
