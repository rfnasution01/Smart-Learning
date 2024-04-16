import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const navigate = useNavigate()

  return (
    <div className="flex h-full flex-col items-center justify-center gap-y-32">
      <div className="flex w-full flex-col items-center">
        <h5 className="mt-32 text-center">
          Don't have an account?{' '}
          <span
            className="text-primary-shade-500 hover:cursor-pointer"
            onClick={() => {
              navigate('registrasi')
            }}
          >
            Registrasi
          </span>
        </h5>
      </div>
    </div>
  )
}
