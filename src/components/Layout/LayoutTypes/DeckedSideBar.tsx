import React, {useEffect, useState} from 'react';
import {UnstyledButton, Tooltip, Title, rem} from '@mantine/core';
import classes from './DeckedSideBar.module.css';
import SideBarBottomContent from '@/components/Layout/SideBarBottomContent';
import navigationConfig from '@/configs/navigation.config';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import Views from '@/components/Layout/Views';

function DeckedSideBarContent() {
  const [active, setActive] = useState('');
  const [activeLink, setActiveLink] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.split('/');
    const currentMainLink = currentPath[1];
    const currentSubLink = currentPath[2];

    const isValidMainLink = navigationConfig.some(link => link.path === currentMainLink);

    if (isValidMainLink) {
      setActive(currentMainLink);
      setActiveLink(currentSubLink || '');
    }
  }, [location]);

  const handleMainLinkClick = (mainLink: string) => {
    setActive(mainLink);
    setActiveLink('');
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.aside}>
          <div>
            <img
              className={classes.logo}
              alt={'Bloxima Logo'}
              src={'/logo/logo-light-full.png'}
            />
          </div>
          {navigationConfig.map((link, index) => (
            <Tooltip
              label={link.title}
              position="right"
              withArrow
              transitionProps={{duration: 0}}
              key={index}
            >
              <UnstyledButton
                onClick={() => handleMainLinkClick(link.path)}
                className={classes.mainLink}
                data-active={link.path === active || undefined}
              >
                <link.icon style={{
                  width: rem(22),
                  height: rem(22)
                }} stroke={1.5}/>
              </UnstyledButton>
            </Tooltip>
          ))}
        </div>
        <div className={classes.main}>
          <Title order={4} className={classes.title}>
            {active}
          </Title>
          {navigationConfig.map((link, index) => (
            <div key={index} style={{display: link.path === active ? 'block' : 'none'}}>
              {link.subMenu &&
                link.subMenu.map((submenuItem, subIndex) => (
                  <Link
                    to={`${link.path}/${submenuItem.path}`}
                    className={classes.link}
                    data-active={`${submenuItem.path}` === activeLink || undefined}
                    key={subIndex}
                  >
                    {submenuItem.title}
                  </Link>
                ))}
            </div>
          ))}
          <SideBarBottomContent/>
        </div>
      </div>
    </nav>
  );
}

export default function DeckedSideBar() {
  return (
    <div style={{
      display: 'flex',
      flex: '1 1 auto'
    }}>
      <DeckedSideBarContent/>
      <div style={{
        padding: '1rem',
        backgroundColor: 'rgb(241,240,240)',
        flex: 1
      }}>
        <Views/>
      </div>
    </div>
  );
}
