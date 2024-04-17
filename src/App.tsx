import { Outlet } from 'react-router-dom'
import { usePathname } from './libs/hooks/usePathname'
import { HeaderLayout } from './features/layout/headerlayout'

export default function RootLayout() {
  const { firstPathname } = usePathname()
  return (
    <div className="scrollbar flex max-h-screen min-h-screen flex-col overflow-auto bg-background">
      {!firstPathname.includes('login') && !firstPathname.includes('cbt') && (
        <HeaderLayout />
      )}
      <Outlet />
    </div>
  )
}
