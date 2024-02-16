import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import { Facebook, Instagram, Search, User, ShoppingBag, Menu } from 'lucide-react';
import useScrollDirection from '../../hooks/useScrollDirection';

const navItems: { title: string; link: string }[] = [
  { title: 'Nouveautés', link: '#' },
  { title: 'Homme', link: '#' },
  { title: 'Femme', link: '#' },
  { title: 'Enfants', link: '#' },
  { title: 'Offres', link: '#' }
];

export const Header = () => {
  const [alternativeHeader, setAlternativeHeader] = useState<boolean>(false);
  const scrollDirection = useScrollDirection();

  const changeToAlternativeHeader = () => {
    setAlternativeHeader(window.scrollY >= 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeToAlternativeHeader);

    return () => {
      window.removeEventListener('scroll', changeToAlternativeHeader);
    };
  }, []);

  return (
    <header className={`${alternativeHeader && styles.alternative} ${scrollDirection === 'down' && styles.hide}`}>
      <img
        className={styles.appLogo}
        src={`/assets/${alternativeHeader ? 'app-logo-alt' : 'app-logo'}.svg`}
        alt="application-logo"
      />
      <nav className={styles.items}>
        <ul>
          {navItems.map((item) => (
            <li className={styles.navItem} key={item.title} role="none">
              <a className={styles.navItemLink} href={item.link}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.actions}>
        <button className={styles.socialMediaButton}>
          <Facebook className={styles.icon} />
        </button>
        <button className={styles.socialMediaButton}>
          <Instagram className={styles.icon} />
        </button>
        <button>
          <Search className={styles.icon} />
        </button>
        <button>
          <ShoppingBag className={styles.icon} />
        </button>
        <button>
          <User className={styles.icon} />
        </button>
        <button className={styles.navMenuButton}>
          <Menu className={styles.icon} />
        </button>
      </div>
    </header>
  );
};
