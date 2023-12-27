import React, { FC, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

interface NavLinks {
  id: string;
  text: string;
  url: string;
}

const navLinks: NavLinks[] = [
  { id: '1', text: 'Home', url: '/' },
  { id: '2', text: 'About Us', url: '/about' },
  { id: '3', text: 'Services', url: '/services' },
  { id: '4', text: 'Contact Us', url: '/contact' },
];

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const handleMenuToggle = () => {
    setIsMenuOpen((prevToggleState) => !prevToggleState);
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={'./assets/astro_logo.jpg'} />
        Astro
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id} onClick={handleMenuToggle}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.burger_menu} onClick={handleMenuToggle}>
        {isMenuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </div>
    </header>
  );
};

export default Header;
