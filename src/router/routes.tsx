import { createBrowserRouter } from 'react-router-dom'
import {
  ActivateAccountPage,
  BeritaPage,
  CBTPage,
  ChangePasswordPage,
  ComingSoon,
  HomeCBTPage,
  Homepage,
  LoginLayout,
  LoginPage,
  NotFound,
  PengumuanPage,
  PercobaanPage,
  PostPage,
  RegistrasiPage,
  RootLayout,
} from './loadables'
import Cookies from 'js-cookie'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <Homepage />,
      },
      {
        path: 'login',
        element: <LoginLayout />,
        children: [
          {
            path: '',
            element: <LoginPage />,
          },
          {
            path: 'login',
            element: <LoginPage />,
          },
          {
            path: 'registrasi',
            element: <RegistrasiPage />,
          },
          {
            path: 'change-password',
            element: <ChangePasswordPage />,
          },
          {
            path: 'activate-account',
            element: <ActivateAccountPage />,
          },
        ],
      },
      {
        path: 'berita',
        element: <BeritaPage />,
      },
      {
        path: 'pengumuman',
        element: <PengumuanPage />,
      },
      {
        path: 'post',
        element: <PostPage />,
      },
      {
        path: 'cbt',
        element: <CBTPage />,
        loader: async () => {
          const jwtPayload = Cookies.get('token')
          const loginPage = import.meta.env.VITE_BASE_LOGIN

          if (!jwtPayload) {
            window.location.href = `${loginPage}`
            Cookies.remove('token')
            return null
          }

          return null
        },
        children: [
          {
            path: '',
            element: <HomeCBTPage />,
          },
          {
            path: 'home',
            element: <HomeCBTPage />,
          },
          {
            path: 'account-setting',
            element: <ComingSoon />,
          },
          {
            path: 'pengumuman',
            element: <ComingSoon />,
          },
          {
            path: 'percobaan',
            element: <PercobaanPage />,
          },
          {
            path: 'ujian',
            element: <ComingSoon />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
