import { Outlet } from 'react-router-dom'

export default function LoginLayout() {
  return (
    <div className="grid h-screen grid-cols-12">
      <div className="col-span-7 block phones:hidden">
        <img
          src="/img/login-bg.jpg"
          alt="login"
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="scrollbar col-span-5 max-h-full overflow-y-auto border-l-2 bg-white phones:col-span-12">
        <Outlet />
      </div>
    </div>
  )
}
