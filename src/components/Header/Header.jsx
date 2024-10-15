import clsx from 'clsx';
import { IoSearchSharp } from 'react-icons/io5';
import { GoPerson } from 'react-icons/go';
import { BsBasket3 } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';

import styles from './Header.module.css';
import BurgerComponent from '../BurgerComponent/BurgerComponent';

export default function Header() {
  const linkClass = ({ isActive }) => {
    return clsx(styles.navItem, isActive && styles.active);
  };
  return (
    <section className={styles.headerContainer}>
      <div className={styles.wrapperForNav}>
        <Link to="/" className={styles.logo}>UA TRADITIONS</Link>
        <nav className={styles.navList}>
          <NavLink to="/catalog/female" className={linkClass}>
            ЖІНКАМ
          </NavLink>
          <NavLink to="/catalog/male" className={linkClass}>
            ЧОЛОВІКАМ
          </NavLink>
          <NavLink to="/" className={linkClass}>
            ЗНИЖКИ
          </NavLink>
        </nav>
      </div>
      <div>
        <ul className={styles.listIcons}>
          <li className={styles.itemIconSearch}>
            <Link to="/">
              <IoSearchSharp className={styles.IconsToNavSearch} />
            </Link>
          </li>
          <li className={styles.itemVector}>
            <div className={styles.vector}></div>
          </li>
          <li className={styles.itemIconUser}>
            <Link to="/login">
              <GoPerson className={styles.IconsToNavPerson} />
            </Link>
          </li>
          <li className={styles.itemIconBasket}>
            <Link to="/cart">
              <BsBasket3 className={styles.IconsToNavBasket} />
            </Link>
          </li>
        </ul>
        <BurgerComponent />
      </div>
    </section>
  );
}
