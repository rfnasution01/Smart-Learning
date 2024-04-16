import loadable from '@loadable/component'

// Layout
export const RootLayout = loadable(() => import('@/App'))
export const LoginLayout = loadable(
  () => import('@/features/layout/loginLayout'),
)

// Pages
export const Homepage = loadable(() => import('@/pages/home'))
export const NotFound = loadable(() => import('@/pages/notFound'))
export const ComingSoon = loadable(() => import('@/pages/comingSoon'))
