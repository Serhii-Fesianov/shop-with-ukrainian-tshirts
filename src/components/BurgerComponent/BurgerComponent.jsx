import styles from './BurgerComponent.module.css';
import { IoMenu } from 'react-icons/io5';
import { useState } from 'react';
import BurgerMenuModal from '../BurgerMenuModal/BurgerMenuModal';

const BurgerComponent = () => {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <div className={styles.wrapperBurger}>
      <button className={styles.burgerMenuButton} onClick={openModal}>
        <IoMenu size="36px" />
      </button>
      <BurgerMenuModal isOpened={isModal} onClose={closeModal} />
    </div>
  );
};

export default BurgerComponent;
