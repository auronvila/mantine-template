import type {NavigationTree} from '@/@types/navigation';
import {IconDashboard, IconBellRinging} from '@tabler/icons-react';

const navigationConfig: NavigationTree[] = [
  {
    key: 'dashboard',
    path: 'dashboard',
    title: 'Dashboard',
    translateKey: 'nav.dashboard',
    icon: IconDashboard,
    authority: [],
    subMenu: [
      {
        path:'aaa',
        title:'aaa',
        key:'aaa',
        translateKey:''
      },
      {
        path:'bbb',
        title:'bbb',
        key:'bbb',
        translateKey:''
      }
    ]
  },
  {
    key: 'users',
    path: '/users',
    title: 'Users',
    translateKey: 'nav.users',
    icon: IconBellRinging,
    authority: [],
    subMenu: [
      {
        path:'ccc',
        title:'ccc',
        key:'ccc',
        translateKey:''
      },
      {
        path:'ddd',
        title:'ddd',
        key:'ddd',
        translateKey:''
      }
    ]
  },
];

export default navigationConfig;
