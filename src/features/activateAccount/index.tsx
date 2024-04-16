import { Form } from '@/components/Form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { Send, UserCircle } from 'lucide-react'
import { Button } from '@/components/Button'
import { useEffect, useState } from 'react'
import { FormLabelInput } from '@/components/ui/input'
import { useNavigate } from 'react-router-dom'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { activateAccountSchema } from '@/libs/const/schema/activateAccountSchema'
import { useGetActivateQuery } from '@/store/slices/loginAPI'

export default function ActivateAccountPage() {
  const navigate = useNavigate()
  const [token, setToken] = useState<string>('')
  const [nisn, setNisn] = useState<string>('')
  const {
    data: getActivate,
    isSuccess,
    isError,
    error,
  } = useGetActivateQuery(
    { token, nisn },
    { skip: token === '' || nisn === '' },
  )

  const form = useForm<zod.infer<typeof activateAccountSchema>>({
    resolver: zodResolver(activateAccountSchema),
    defaultValues: {},
  })

  async function handleSubmit(values) {
    try {
      setToken(values.token)
      setNisn(values?.nisn)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success(`Akun sudah diverifikasi!`, {
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

  console.log({ getActivate })

  return (
    <div className="flex h-full flex-col items-center justify-center gap-y-32 px-[18rem] phones:px-[4rem]">
      <div className="flex w-full flex-col items-center rounded-2xl bg-white p-32 shadow-md">
        <span className="mb-64 font-roboto text-[3rem]">Activate Account</span>
        <Form {...form}>
          <form className="w-full" onSubmit={form.handleSubmit(handleSubmit)}>
            <div className="flex flex-col gap-32 text-black">
              <div className="flex flex-col gap-y-32">
                <FormLabelInput
                  form={form}
                  label="NISN"
                  placeholder="Write your nisn"
                  name="nisn"
                  prefix={<UserCircle size={16} />}
                  type="text"
                  className="col-span-6 phones:col-span-12"
                />
                <FormLabelInput
                  form={form}
                  label="Token"
                  placeholder="Write your token"
                  name="token"
                  prefix={<UserCircle size={16} />}
                  type="text"
                  className="col-span-6 phones:col-span-12"
                />
              </div>

              <Button variant="solid-primary" type="submit">
                <Send size={12} />
                Verifikasi
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
