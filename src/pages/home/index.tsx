import { Button } from '@/components/Button'
import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <div className="flex h-screen items-center justify-center bg-blue-300">
      <Link to="/login">
        <Button variant="solid-primary">Login</Button>
      </Link>
    </div>
  )
}
