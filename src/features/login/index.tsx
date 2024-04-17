import { Form } from '@/components/Form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import {
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  Send,
  UserCircle,
} from 'lucide-react'
import { Button } from '@/components/Button'
import { useEffect, useState } from 'react'
import { FormLabelInput } from '@/components/ui/input'
import { useNavigate } from 'react-router-dom'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { loginSchema } from '@/libs/const/schema/loginSchema'
import { useCreateLoginMutation } from '@/store/slices/loginAPI'
import clsx from 'clsx'

export default function LoginPage() {
  const navigate = useNavigate()
  const [isShow, setIsShow] = useState<boolean>(false)
  const [createLogin, { isSuccess, isError, error, isLoading }] =
    useCreateLoginMutation()
  const disabled = isLoading

  const form = useForm<zod.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {},
  })

  async function handleFormLogin(values) {
    try {
      await createLogin({ data: values })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success(`Login berhasil!`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }, [isSuccess])

  useEffect(() => {
    if (isError) {
      const errorMsg = error as {
        data?: {
          message?: string
        }
      }

      toast.error(`${errorMsg?.data?.message ?? 'Terjadi Kesalahan'}`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
    }
  }, [isError, error])

  return (
    <div className="flex h-full flex-col items-center justify-center gap-y-32 px-[18rem] phones:px-[4rem]">
      <div className="flex w-full flex-col items-center rounded-2xl bg-white p-32 shadow-md">
        <span className="mb-64 font-roboto text-[3rem]">Login to continue</span>
        <Form {...form}>
          <form
            className="w-full"
            onSubmit={form.handleSubmit(handleFormLogin)}
          >
            <div className="flex flex-col gap-32 text-black">
              <div className="flex flex-col gap-y-12">
                <FormLabelInput
                  form={form}
                  label="NISN"
                  placeholder="Write your nisn"
                  name="username"
                  prefix={<UserCircle size={16} />}
                  type="text"
                  className="col-span-6 mb-32 phones:col-span-12"
                  isDisabled={disabled}
                />

                <FormLabelInput
                  form={form}
                  label="Password"
                  placeholder="Write your password"
                  name="password"
                  prefix={<Lock size={16} />}
                  suffix={isShow ? <Eye size={16} /> : <EyeOff size={16} />}
                  handlerClick={() => setIsShow(!isShow)}
                  type={!isShow ? 'password' : 'text'}
                  className="col-span-6 phones:col-span-12"
                  isDisabled={disabled}
                />

                <div className="flex items-center justify-between">
                  <span
                    className="hover:cursor-pointer hover:text-primary-shade-500"
                    onClick={() => {
                      navigate('change-password')
                    }}
                  >
                    Change Password
                  </span>
                  <span
                    className="hover:cursor-pointer hover:text-primary-shade-500"
                    onClick={() => {
                      navigate('')
                    }}
                  >
                    Forgot Password?
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-y-12">
                <Button
                  variant="solid-primary"
                  type="submit"
                  classes="py-12"
                  disabled={disabled}
                >
                  <span
                    className={clsx('', {
                      'animate-spin duration-100': disabled,
                    })}
                  >
                    {disabled ? <Loader2 size={12} /> : <Send size={12} />}
                  </span>
                  Login
                </Button>
                <span className="text-center">or login with:</span>
              </div>

              <div className="flex flex-col gap-y-12">
                <Button
                  variant="outlined-primary"
                  type="button"
                  classes="py-12"
                  disabled
                >
                  <img src="/icon/Google.svg" alt="Icon Google" />
                  Login with Google
                </Button>
                <Button
                  variant="outlined-primary"
                  type="button"
                  classes="py-12"
                  disabled
                >
                  <Mail size={16} />
                  Login with Email
                </Button>
              </div>

              <div className="mt-32 flex flex-col gap-y-12">
                <h5
                  className="text-center hover:cursor-pointer hover:text-primary-shade-500"
                  onClick={() => {
                    navigate('activate-account')
                  }}
                >
                  Activate Account
                </h5>
                <h5 className="text-center">
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
          </form>
          <ToastContainer />
        </Form>
      </div>
    </div>
  )
}
