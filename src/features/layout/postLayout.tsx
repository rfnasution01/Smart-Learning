import { Outlet } from 'react-router-dom'

export default function PostLayout() {
  return (
    <div className="flex flex-col p-32">
      <span>Test</span>
      <Outlet />
    </div>
  )
}
