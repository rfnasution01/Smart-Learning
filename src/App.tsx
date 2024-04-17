import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Outlet />
    </div>
  )
}
