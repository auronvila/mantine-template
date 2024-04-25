import {lazy} from 'react'
import type {Routes} from '@/@types/routes'

const authRoute: Routes = [
  {
    key: 'signIn',
    path: `/sign-in`,
    component: lazy(() => import('@/pages/auth/SignIn')),
    authority: []
  },
  // {
  //   key: 'signUp',
  //   path: `/sign-up`,
  //   component: lazy(() => import('@/views/auth/SignUp')),
  //   authority: []
  // },
  // {
  //   key: 'forgotPassword',
  //   path: `/forgot-password`,
  //   component: lazy(() => import('@/views/auth/ForgotPassword')),
  //   authority: []
  // },
  // {
  //   key: 'two-factor',
  //   path: `/two-factor`,
  //   component: lazy(() => import('@/views/auth/TwoFactorAuth/TwoFactorAuthPage')),
  //   authority: []
  // },
  // {
  //   key: 'log-out',
  //   path: `/log-out/:key`,
  //   component: lazy(() => import('@/views/logout')),
  //   authority: []
  // },
]

export default authRoute
