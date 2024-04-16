import { Link, Outlet } from 'react-router-dom'
import { usePathname } from './libs/hooks/usePathname'
import { Button } from './components/Button'

export default function RootLayout() {
  const { firstPathname } = usePathname()
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {firstPathname !== 'login' && (
        <div className="flex h-screen items-center justify-center ">
          <Link to="/login">
            <Button variant="solid-primary">Login</Button>
          </Link>
        </div>
      )}
      <Outlet />
    </div>
  )
}
