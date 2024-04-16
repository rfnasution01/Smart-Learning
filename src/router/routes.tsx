import { createBrowserRouter } from 'react-router-dom'
import {
  ActivateAccountPage,
  ChangePasswordPage,
  Homepage,
  LoginLayout,
  LoginPage,
  NotFound,
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
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
