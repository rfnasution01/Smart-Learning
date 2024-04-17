import { CBTHeaderLayout } from '@/features/layout/cbtHeaderLayout'
import { Outlet } from 'react-router-dom'

export default function CBT() {
  return (
    <div className="scrollbar flex max-h-screen min-h-screen flex-col overflow-auto bg-background">
      <CBTHeaderLayout />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  )
}
