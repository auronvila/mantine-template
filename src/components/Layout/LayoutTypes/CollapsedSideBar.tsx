import React, {useEffect, useState} from 'react';
import {Center, Stack} from '@mantine/core';
import {
  IconLogout,
} from '@tabler/icons-react';
import classes from './CollapsedSideBar.module.css';
import navigationConfig from "@/configs/navigation.config";
import {Link, useLocation, useNavigate} from "react-router-dom";
import Views from "@/components/Layout/Views";
import useAuth from "@/utils/hooks/useAuth";
import CollapsedSideBarUserPopOver from "@/components/UserPopOver/CollapsedSideBarUserPopOver";
import AuthorityCheck from '@/route/AuthorityCheck';
import {useAppSelector} from "@/store";

function CollapsedSideBarBottomContent() {
  const {signOut} = useAuth()
  return (
    <div className={classes.linkWrapper}>
      <div className={classes.link}>
        <CollapsedSideBarUserPopOver/>
      </div>
      <div className={classes.link} onClick={(event) => {
        signOut()
      }}>
        <IconLogout/>
      </div>
    </div>
  )
}

function CollapsedSideBarContent() {
  const [active, setActive] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const userAuthority = useAppSelector((state) => state.auth.user.role)

  useEffect(() => {
    const currentPath = location.pathname.split('/')[1];
    setActive(currentPath);
  }, [location.pathname]);

  const links = navigationConfig.map((item) => (
    <AuthorityCheck userAuthority={userAuthority ? userAuthority : []} authority={item.authority}>
      <Link
        className={classes.link}
        data-active={item.path.split('/')[1] === active ? 'true' : undefined}
        to={item.path}
        key={item.title}
        onClick={(event) => {
          event.preventDefault();
          setActive(item.path);
          navigate(item.path);
        }}
      >
        <item.icon className={classes.linkIcon} stroke={1.5}/>
      </Link>
    </AuthorityCheck>
  ));

  return (
    <nav className={classes.navbar}>
      <Center>
        <img className={classes.logo} alt={'Mantine Logo'} src={'/logo/logo-light-full.svg'}/>
      </Center>
      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>
      <CollapsedSideBarBottomContent/>
    </nav>
  )
}

export default function CollapsedSideBar() {
  return (
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
