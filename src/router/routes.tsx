import { createBrowserRouter } from 'react-router-dom'
import {
  ActivateAccountPage,
  BeritaPage,
  CBTPage,
  ChangePasswordPage,
  ComingSoon,
  Homepage,
  LoginLayout,
  LoginPage,
  NotFound,
  PengumuanPage,
  PostPage,
  RegistrasiPage,
  RootLayout,
} from './loadables'

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
        children: [
          {
            path: '',
            element: <ComingSoon />,
          },
          {
            path: 'home',
            element: <ComingSoon />,
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
            element: <ComingSoon />,
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
