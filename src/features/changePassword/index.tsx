import { Form } from '@/components/Form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { Eye, EyeOff, Loader2, Lock, Save } from 'lucide-react'
import { Button } from '@/components/Button'
import { useEffect, useState } from 'react'
import { FormLabelInput } from '@/components/ui/input'
import { useNavigate } from 'react-router-dom'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { changePasswordSchema } from '@/libs/const/schema/changePasswordSchema'
import { useCreateNewPasswordMutation } from '@/store/slices/loginAPI'
import clsx from 'clsx'

export default function ChangePasswordPage() {
  const navigate = useNavigate()
  const [isShow, setIsShow] = useState<boolean>(false)
  const [createNewPassword, { isSuccess, isError, error, isLoading }] =
    useCreateNewPasswordMutation()
  const disabled = isLoading

  const form = useForm<zod.infer<typeof changePasswordSchema>>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {},
  })

  async function handleFormLogin(values) {
    try {
      await createNewPassword({ data: values })
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
        <span className="mb-64 font-roboto text-[3rem]">Change Password</span>
        <Form {...form}>
          <form
            className="w-full"
            onSubmit={form.handleSubmit(handleFormLogin)}
          >
            <div className="flex flex-col gap-32 text-black">
              <div className="flex flex-col gap-y-32">
                <FormLabelInput
                  form={form}
                  label="Old Password"
                  placeholder="Write your old password"
                  name="old_password"
                  prefix={<Lock size={16} />}
                  suffix={isShow ? <Eye size={16} /> : <EyeOff size={16} />}
                  handlerClick={() => setIsShow(!isShow)}
                  type={!isShow ? 'password' : 'text'}
                  className="col-span-6 phones:col-span-12"
                  isDisabled={disabled}
                />

                <FormLabelInput
                  form={form}
                  label="New Password"
                  placeholder="Write your new password"
                  name="new_password"
                  prefix={<Lock size={16} />}
                  suffix={isShow ? <Eye size={16} /> : <EyeOff size={16} />}
                  handlerClick={() => setIsShow(!isShow)}
                  type={!isShow ? 'password' : 'text'}
                  className="col-span-6 phones:col-span-12"
                  isDisabled={disabled}
                />
              </div>

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
                  {disabled ? <Loader2 size={12} /> : <Save size={12} />}
                </span>
                Simpan
              </Button>

              <h5 className="mt-32 text-center">
                Have an account?{' '}
                <span
                  className="text-primary-shade-500 hover:cursor-pointer"
                  onClick={() => {
                    navigate('/login')
                  }}
                >
                  Login
                </span>
              </h5>
            </div>
          </form>
          <ToastContainer />
        </Form>
      </div>
    </div>
  )
}
