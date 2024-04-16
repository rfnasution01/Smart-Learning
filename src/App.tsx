import { Outlet } from 'react-router-dom'
import { usePathname } from './libs/hooks/usePathname'

export default function RootLayout() {
  const { firstPathname } = usePathname()
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {firstPathname !== 'login' && <div className="bg-red-300">Test</div>}
      <Outlet />
    </div>
  )
}
