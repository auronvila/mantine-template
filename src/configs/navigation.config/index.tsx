import type { NavigationTree } from '@/@types/navigation';
import { IconDashboard, IconBellRinging } from '@tabler/icons-react';

const navigationConfig: NavigationTree[] = [
  {
    key: 'dashboard',
    path: '/dashboard',
    title: 'Dashboard',
    translateKey: 'nav.dashboard',
    icon: IconDashboard,
    authority: [],
    // subMenu: []
  },
  {
    key: 'users',
    path: '/users',
    title: 'Users',
    translateKey: 'nav.users',
    icon: IconBellRinging,
    authority: [],
    // subMenu: []
  },
];

export default navigationConfig;
