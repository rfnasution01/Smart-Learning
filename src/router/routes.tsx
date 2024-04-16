import { createBrowserRouter } from 'react-router-dom'
import { Homepage, LoginLayout, NotFound, RootLayout } from './loadables'

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
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
