import styles from './BurgerMenuModal.module.css';
import PropTypes from 'prop-types';
import { BsBasket3 } from 'react-icons/bs';
import { GoPerson } from 'react-icons/go';
import { IoClose, IoSearchSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const BurgerMenuModal = ({ isOpened, onClose }) => {
  if (!isOpened) return null;

  const handleWrapperClick = event => {
    event.stopPropagation();
  };

  return (
    <div className={styles.specialBox}>
      <div className={styles.backDrop} onClick={onClose}>
        <div
          className={`${styles.wrapperModal} ${isOpened ? styles.active : ''}`}
          onClick={handleWrapperClick}
        >
          <button className={styles.buttonClose} onClick={onClose}>
            <IoClose className={styles.closeIcon} />
          </button>

          <ul className={styles.listBurgerMenu}>
            <li className={styles.itemBurgerMenu}>
              <Link to="/catalog/female">ЖІНКАМ</Link>
            </li>
            <li className={styles.itemBurgerMenu}>
              <Link to="/catalog/male">ЧОЛОВІКАМ</Link>
            </li>
            <li className={styles.itemBurgerMenu}>
              <Link to="/">ЗНИЖКИ</Link>
            </li>
            <li className={styles.itemBurgerMenu}>
              <Link to="/">ПОШУК</Link>
              <IoSearchSharp className={styles.IconsToNavSearch} />
            </li>
            <li className={styles.itemBurgerMenu}>
              <Link to="/login">ПРОФІЛЬ</Link>
              <GoPerson className={styles.IconsToNavPerson} />
            </li>
            <li className={styles.itemBurgerMenuBasket}>
              <Link to="/cart">КОШИК</Link>
              <BsBasket3 className={styles.IconsToNavBasket} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

BurgerMenuModal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BurgerMenuModal;
