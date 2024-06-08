import React, {useEffect, useState} from "react";
import Views from "@/components/Layout/Views";
import {Link, useLocation, useNavigate} from "react-router-dom";
import navigationConfig from "@/configs/navigation.config";
import {LinksGroup} from "@/components/Layout/LinksGroup";
import classes from "@/components/Layout/LayoutTypes/SimpleSideBar.module.css";
import {Group} from "@mantine/core";
import SimpleSideBarBottomContent from "@/components/Layout/LayoutTypes/SimpleSideBarBottomContent";
import {useTranslation} from "react-i18next";
import AuthorityCheck from "@/route/AuthorityCheck";
import {useAppSelector} from "@/store";

function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState('');
  const {t} = useTranslation()
  const userAuthority = useAppSelector((state) => state.auth.user.role)

  useEffect(() => {
    const currentPath = location.pathname.split('/')[1];
    setActive(currentPath);
  }, [location.pathname]);

  const links = navigationConfig.map((item, index) => {
    let links: { label: string, link: string }[] = [];

    if (item.subMenu && item.subMenu.length > 0) {
      links = item.subMenu.map(i => ({
        label: i.title,
        link: i.path
      }));
      return (
        <LinksGroup key={index} icon={item.icon} label={item.title} links={links}/>
      );
    } else {
      return (
        <AuthorityCheck userAuthority={userAuthority ? userAuthority : []} authority={item.authority}>
          <Link
            className={classes.link}
            data-active={item.path.split('/')[1] === active ? 'true' : undefined}
            to={item.path}
            key={index}
            onClick={(event) => {
              event.preventDefault();
              setActive(item.path.split('/')[1]);
              navigate(item.path);
            }}
          >
            <item.icon className={classes.linkIcon} stroke={1.5}/>
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
          <img className={classes.logo} alt={'Mantine Logo'} src={'/logo/logo-light-full.svg'}/>
        </Group>
        {links}
      </div>
      <div className={classes.footer}>
        <SimpleSideBarBottomContent/>
      </div>
    </nav>
  );
}

export default function SimpleSideBar() {
  return (
    <div style={{
      backgroundColor: 'rgb(241,240,240)',
      display: 'flex',
      flex: ' 1 1 auto'
    }}>
      <SideBar/>
      <div style={{
        padding: '1rem',
        backgroundColor: 'rgb(241,240,240)',
        flex: 1
      }}>
        <Views/>
      </div>
    </div>
  )
}
