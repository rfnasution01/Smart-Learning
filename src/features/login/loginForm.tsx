import { usePathname } from '@/libs/hooks/usePathname'

export function LoginForm() {
  const { firstPathname } = usePathname()
  return (
    <div className="flex h-full flex-col items-center justify-center gap-y-32 bg-red-300">
      <div className="w-full bg-blue-300 p-32">
        <span>{firstPathname?.includes('login')}</span>
      </div>
    </div>
  )
}
