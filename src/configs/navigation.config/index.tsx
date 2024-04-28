import type {NavigationTree} from '@/@types/navigation';
import {IconDashboard, IconUser} from '@tabler/icons-react';

const navigationConfig: NavigationTree[] = [
  {
    key: 'dashboard',
    path: 'dashboard',
    title: 'nav.dashboard',
    translateKey: 'nav.dashboard',
    icon: IconDashboard,
    authority: [],
    subMenu: []
  },
  {
    key: 'users',
    path: 'users',
    title: 'Users',
    translateKey: '',
    icon: IconUser,
    authority: [],
    subMenu: [
    ]
  },
];

export default navigationConfig;
