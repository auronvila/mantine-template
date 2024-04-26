import {useEffect, useState} from 'react';
import {Group} from '@mantine/core';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import navigationConfig from '@/configs/navigation.config';
import classes from './SideBar.module.css';
import SideBarBottomContent from "@/components/Layout/SideBarBottomContent";
import {LinksGroup} from "@/components/Layout/LinksGroup";

export function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState('');

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
        <Link
          className={classes.link}
          data-active={item.path === active ? 'true' : undefined}
          to={item.path}
          key={index}
          onClick={(event) => {
            event.preventDefault();
            setActive(item.path);
            navigate(item.path);
          }}
        >
          <item.icon className={classes.linkIcon} stroke={1.5}/>
          <span>{item.title}</span>
        </Link>
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
        <SideBarBottomContent/>
      </div>
    </nav>
  );
}
