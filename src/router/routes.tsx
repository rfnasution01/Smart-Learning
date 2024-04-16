import { createBrowserRouter } from 'react-router-dom'
import {
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
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
