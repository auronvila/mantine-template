import { lazy } from 'react'
import authRoute from './authRoute'
import type { Routes } from '@/@types/routes'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes = [
  {
    key: 'dashboard',
    path: '/dashboard',
    component: lazy(() => import('@/pages/Dashboard')),
    authority: []
  },
  {
    key: 'users',
    path: '/users',
    component: lazy(() => import('@/pages/Users')),
    authority: []
  },
  {
    key: 'dashboardd',
    path: '/dashboard/aaa',
    component: lazy(() => import('@/pages/Users')),
    authority: []
  },
  {
    key: 'dashboarda',
    path: '/dashboard/bbb',
    component: lazy(() => import('@/pages/auth/SignIn')),
    authority: []
  },
  // {
  //   key: 'dashboard',
  //   path: '/dashboard',
  //   component: lazy(() => import('@/views/dashboard')),
  //   authority: ['ADMIN']
  // },
  // {
  //   key: 'main',
  //   path: '/',
  //   component: lazy(() => import('@/views/Home')),
  //   authority: []
  // },
  // {
  //   key: 'change-password',
  //   path: '/change-password',
  //   component: lazy(() => import('@/views/auth/ChangePassword/ChangePassword')),
  //   authority: []
  // },
  // {
  //   key: 'log-out',
  //   path: `/log-out/:key`,
  //   component: lazy(() => import('@/views/logout')),
  //   authority: []
  // },
]
