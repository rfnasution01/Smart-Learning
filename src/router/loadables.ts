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

export const LoginPage = loadable(() => import('@/features/login'))
export const RegistrasiPage = loadable(() => import('@/features/registrasi'))
export const ChangePasswordPage = loadable(
  () => import('@/features/changePassword'),
)
export const ActivateAccountPage = loadable(
  () => import('@/features/activateAccount'),
)

export const BeritaPage = loadable(() => import('@/pages/berita'))
export const PengumuanPage = loadable(() => import('@/pages/pengumuman'))
