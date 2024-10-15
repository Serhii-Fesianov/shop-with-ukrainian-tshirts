import { useState } from 'react';
import styles from './Filter.module.css';
import { GoChevronDown } from 'react-icons/go';
import clsx from 'clsx';

export default function Filter() {
  const [value, setValue] = useState(0);
  const [rotatedSize, setRotatedSize] = useState(false);
  const [rotatedColor, setRotatedColor] = useState(false);
  const [isOpenSize, setIsOpenSize] = useState(false);
  const [isOpenColors, setIsOpenColors] = useState(false);

  const handleChangeDropSizeList = () => {
    setIsOpenSize(!isOpenSize);
    setRotatedSize(prev => !prev);
  };

  const handleChangeDropColorsList = () => {
    setIsOpenColors(!isOpenColors);
    setRotatedColor(prev => !prev);
  };

  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <div className={styles.wrapperSection}>
      <div className={styles.boxSelects}>
        <div className={styles.boxSizeList}>
          <h3 className={styles.titleSelectSize}>РОЗМІР</h3>
          <button
            className={clsx({
              [styles.buttonDropDown]: true,
              [styles.rotatedSize]: rotatedSize,
            })}
            onClick={() => handleChangeDropSizeList()}
          >
            <GoChevronDown className={styles.dropIcon} />
          </button>
          <ul className={isOpenSize ? styles.listDropSize : styles.listNone}>
            <li className={styles.itemSize}>
              <button className={styles.buttonDropList}>
                <p className={styles.elementItem}>XS</p>
              </button>
            </li>
            <li className={styles.itemSize}>
              <button className={styles.buttonDropList}>
                <p className={styles.elementItem}>S</p>
              </button>
            </li>
            <li className={styles.itemSize}>
              <button className={styles.buttonDropList}>
                <p className={styles.elementItem}>M</p>
              </button>
            </li>
            <li className={styles.itemSize}>
              <button className={styles.buttonDropList}>
                <p className={styles.elementItem}>L</p>
              </button>
            </li>
            <li className={styles.itemSize}>
              <button className={styles.buttonDropList}>
                <p className={styles.elementItem}>XL</p>
              </button>
            </li>
          </ul>
        </div>
        <div className={styles.boxColorsList}>
          <h3 className={styles.titleSelect}>КОЛІР</h3>
          <button
            className={clsx({
              [styles.buttonDropDown]: true,
              [styles.rotatedColor]: rotatedColor,
            })}
            onClick={() => handleChangeDropColorsList()}
          >
            <GoChevronDown className={styles.dropIcon} />
          </button>
          <ul
            className={isOpenColors ? styles.listDropColors : styles.listNone}
          >
            <li className={styles.itemColors}>
              <button className={styles.buttonDropList}>
                <p className={styles.elementItem}>Білий</p>
              </button>
            </li>
            <li className={styles.itemColors}>
              <button className={styles.buttonDropList}>
                <p className={styles.elementItem}>Чорний</p>
              </button>
            </li>
            <li className={styles.itemColors}>
              <button className={styles.buttonDropList}>
                <p className={styles.elementItem}>Синій</p>
              </button>
            </li>
            <li className={styles.itemColors}>
              <button className={styles.buttonDropList}>
                <p className={styles.elementItem}>Червоний</p>
              </button>
            </li>
            <li className={styles.itemColors}>
              <button className={styles.buttonDropList}>
                <p className={styles.elementItem}>Сірий</p>
              </button>
            </li>
          </ul>
        </div>
        <div className={styles.boxInputNumber}>
          <input
            type="range"
            id="price"
            name="price"
            min="0"
            max="10000"
            step="1"
            onChange={handleChange}
            className={styles.rangeInput}
          ></input>
          <span>{value}</span>
        </div>
      </div>
      <button className={styles.clearFilterButton}>очистити фільтр</button>
    </div>
  );
}
