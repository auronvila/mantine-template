import React, {useEffect, useState} from 'react';
import {Center, Tooltip, UnstyledButton, Stack, rem} from '@mantine/core';
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
} from '@tabler/icons-react';
import classes from './CollapsedSideBar.module.css';
import SideBarBottomContent from "@/components/Layout/SideBarBottomContent";
import navigationConfig from "@/configs/navigation.config";
import {Link, useLocation, useNavigate} from "react-router-dom";
import Views from "@/components/Layout/Views";

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;

  onClick?(): void;
}

function NavbarLink({
                      icon: Icon,
                      label,
                      active,
                      onClick
                    }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{duration: 0}}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon style={{
          width: rem(20),
          height: rem(20)
        }} stroke={1.5}/>
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  {
    icon: IconHome2,
    label: 'Home'
  },
  {
    icon: IconGauge,
    label: 'Dashboard'
  },
  {
    icon: IconDeviceDesktopAnalytics,
    label: 'Analytics'
  },
  {
    icon: IconCalendarStats,
    label: 'Releases'
  },
  {
    icon: IconUser,
    label: 'Account'
  },
  {
    icon: IconFingerprint,
    label: 'Security'
  },
  {
    icon: IconSettings,
    label: 'Settings'
  },
];

function CollapsedSideBarContent() {
  const [active, setActive] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    setActive(currentPath);
  }, [location.pathname]);



  const links = navigationConfig.map((item) => (
    <Link
      className={classes.link}
      data-active={item.path === active ? 'true' : undefined}
      to={item.path}
      key={item.title}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.path);
        navigate(item.path);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <Center>
        <img className={classes.logo} alt={'Bloxima Logo'} src={'/logo/logo-light-full.svg'}/>
      </Center>
      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>
      {/*<SideBarBottomContent/>*/}
    </nav>
  )
}

export default function CollapsedSideBar() {
  return(
    <>
      <div style={{
        display: 'flex',
        flex: ' 1 1 auto',
        backgroundColor: 'rgb(241,240,240)',
      }}>
        <CollapsedSideBarContent/>
        <div style={{
          padding: '1rem',
          backgroundColor: 'rgb(241,240,240)',
          flex: 1
        }}>
          <Views/>
        </div>
      </div>
    </>
  )

}
