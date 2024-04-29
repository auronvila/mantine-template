import type {NavigationTree} from '@/@types/navigation';
import {IconDashboard, IconUser} from '@tabler/icons-react';

const navigationConfig: NavigationTree[] = [
  {
    key: 'dashboard',
    path: '/dashboard',
    title: 'Dashboard',
    translateKey: '',
    icon: IconDashboard,
    authority: [],
    subMenu: [
      {
        key: 'pages',
        path: 'pages',
        title: 'pages',
        translateKey: '',
      },
      {
        key: 'files',
        path: 'files',
        title: 'files',
        translateKey: '',
      },
    ]
  },
  {
    key: 'users',
    path: '/users',
    title: 'Users',
    translateKey: '',
    icon: IconUser,
    authority: [],
    subMenu: [
      {
        key: 'manage',
        path: 'manage',
        title: 'manage',
        translateKey: '',
      },
    ]
  },
  // {
  //   key: 'users',
  //   path: '/users',
  //   title: 'users',
  //   translateKey: '',
  //   icon: IconUser,
  //   authority: [],
  //   subMenu: []
  // },

];

export default navigationConfig;
