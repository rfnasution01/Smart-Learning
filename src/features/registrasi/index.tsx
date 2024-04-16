import { Form } from '@/components/Form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { Eye, EyeOff, Lock, Mail, Send, UserCircle } from 'lucide-react'
import { FormListJenisKelamin } from '@/components/ui/form/formListJenisKelamin'
import { Button } from '@/components/Button'
import { useEffect, useState } from 'react'
import { registerSchema } from '@/libs/const/schema/registerSchema'
import { FormListAgama } from '@/components/ui/form/formListAgama'
import { FormLabelInput } from '@/components/ui/input'
import { useNavigate } from 'react-router-dom'
import { useCreateAccountMutation } from '@/store/slices/accountAPI'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function RegistrasiPage() {
  const navigate = useNavigate()
  const [isShow, setIsShow] = useState<boolean>(false)
  const [createAccount, { isSuccess, isError, error }] =
    useCreateAccountMutation()

  const form = useForm<zod.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {},
  })

  async function handleFormSignup(values) {
    try {
      await createAccount({ data: values })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success(`Registrasi berhasil. Silahkan login!`, {
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
        navigate('/login')
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

      toast.error(`${errorMsg.data.message ?? 'Terjadi Kesalahan'}`, {
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
    <div className="flex flex-col items-center justify-center gap-y-32 bg-white">
      <div className="flex w-full flex-col items-center p-32">
        <span className="mb-64 font-roboto text-[3rem]">Create an Account</span>
        <Form {...form}>
          <form
            className="w-full"
            onSubmit={form.handleSubmit(handleFormSignup)}
          >
            <div className="flex flex-col gap-32 text-black">
              <div className="flex flex-col gap-y-32">
                <div className="grid grid-cols-12 gap-32">
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
                    label="Email"
                    placeholder="Write your email"
                    name="email"
                    prefix={<span>@</span>}
                    className="col-span-6 phones:col-span-12"
                  />
                </div>

                <div className="grid grid-cols-12 gap-32">
                  <FormLabelInput
                    form={form}
                    label="Nama"
                    placeholder="Write your name"
                    name="nama"
                    type="text"
                    className="col-span-6 phones:col-span-12"
                  />

                  <FormLabelInput
                    form={form}
                    label="Tanggal Lahir"
                    placeholder="DD-MM-YYYY"
                    name="tanggal_lahir"
                    type="date"
                    className="col-span-6 phones:col-span-12"
                  />
                </div>

                <div className="grid grid-cols-12 gap-32">
                  <FormListJenisKelamin
                    name="jk"
                    placeholder="Choose your gender"
                    headerLabel="Jenis Kelamin"
                    form={form}
                    className="col-span-6 phones:col-span-12"
                  />

                  <FormListAgama
                    name="agama"
                    placeholder="Choose your religion"
                    headerLabel="Agama"
                    form={form}
                    className="col-span-6 phones:col-span-12"
                  />
                </div>
                <div className="grid grid-cols-12 gap-32">
                  <FormLabelInput
                    form={form}
                    label="WA"
                    placeholder="Write your wa number"
                    name="wa"
                    type="text"
                    className="col-span-6 phones:col-span-12"
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
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-12">
                <Button variant="solid-primary" type="submit" classes="py-12">
                  <Send size={12} />
                  Simpan
                </Button>
                <span className="text-center">or sign up with:</span>
              </div>

              <div className="flex flex-col gap-y-12">
                <Button
                  variant="outlined-primary"
                  type="button"
                  classes="py-12"
                  disabled
                >
                  <img src="/icon/Google.svg" alt="Icon Google" />
                  Sign Up with Google
                </Button>
                <Button
                  variant="outlined-primary"
                  type="button"
                  classes="py-12"
                  disabled
                >
                  <Mail size={16} />
                  Sign Up with Email
                </Button>
              </div>

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
