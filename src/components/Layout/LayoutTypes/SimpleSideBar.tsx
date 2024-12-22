import React, { useEffect, useState } from 'react';
import Views from '@/components/Layout/Views';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import navigationConfig from '@/configs/navigation.config';
import { LinksGroup } from '@/components/Layout/LinksGroup';
import classes from '@/components/Layout/LayoutTypes/SimpleSideBar.module.css';
import {Box, Card, Group} from '@mantine/core';
import SimpleSideBarBottomContent from '@/components/Layout/LayoutTypes/SimpleSideBarBottomContent';
import { useTranslation } from 'react-i18next';
import AuthorityCheck from '@/route/AuthorityCheck';
import { useAppSelector } from '@/store';

function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState('');
  const { t } = useTranslation();
  const userAuthority = useAppSelector((state) => state.auth.user.role);

  useEffect(() => {
    const currentPath = location.pathname.split('/')[1];
    setActive(currentPath);
  }, [location.pathname]);

  const links = navigationConfig.map((item, index) => {
    let links = [];

    if (item.subMenu && item.subMenu.length > 0) {
      links = item.subMenu.map((i) => ({
        label: i.title,
        link: i.path,
        authority: i.authority,
      }));
      const isAnyLinkActive = links.some((link) => location.pathname.includes(link.link));

      return (
        <AuthorityCheck
          userAuthority={userAuthority || []}
          authority={item.authority}
          key={index}
        >
          <Box ml={10} my={10}>
          <LinksGroup
            initiallyOpened={isAnyLinkActive}
            icon={item.icon}
            label={item.title}
            links={links}
          />
          </Box>
        </AuthorityCheck>
      );
    } else {
      return (
        <AuthorityCheck
          userAuthority={userAuthority || []}
          authority={item.authority}
          key={index}
        >
          <Link
            className={classes.link}
            data-active={item.path.split('/')[1] === active ? 'true' : undefined}
            to={item.path}
            onClick={(event) => {
              event.preventDefault();
              setActive(item.path.split('/')[1]);
              navigate(item.path);
            }}
          >
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{item.translateKey ? t(item.translateKey) : item.title}</span>
          </Link>
        </AuthorityCheck>
      );
    }
  });

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <img className={classes.logo} alt={'Mantine Logo'} src={'/logo/logo-light-full.svg'} />
        </Group>
        {links}
      </div>
        <SimpleSideBarBottomContent />
    </nav>
  );
}

export default function SimpleSideBar() {
  return (
    <div
      style={{
        overflow: 'hidden',
        backgroundColor: 'rgb(236,236,236)',
        display: 'flex',
        flex: '1 1 auto',
        height: '100vh',
      }}
    >
      <SideBar />
      <div
        style={{
          padding: '2rem',
          backgroundColor: '#ffffff',
          flex: 1,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
      >
        <Card
          style={{
            overflowY: 'auto',
            maxHeight: '100%',
            width: '100%',
            flex: 1,
          }}
          radius={15}
          withBorder
          p={40}
        >
          <Views />
        </Card>
      </div>
    </div>
  );
}
