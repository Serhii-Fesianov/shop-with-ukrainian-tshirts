import { Link } from 'react-router-dom';

import styles from './Footer.module.css';
export default function Footer() {
  return (
    <section className={styles.footerSection}>
      <Link to="/" className={styles.logo}>
        UA TRADITIONS
      </Link>
    </section>
  );
}
