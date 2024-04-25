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
    const currentPath = location.pathname;
    setActive(currentPath);
  }, [location.pathname]);

  const links = navigationConfig.map((item,index) => {
    if (item.subMenu && item.subMenu.length > 0) {
      return (
        <LinksGroup key={index} icon={item.icon} label={item.title} links={[{link:item.path,label:item.title}]}/>
      )
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
      )
    }
  });

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <img className={classes.logo} alt={'Bloxima Logo'} src={'/logo/logo-light-full.png'}/>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <SideBarBottomContent/>
      </div>
    </nav>
  );
}
