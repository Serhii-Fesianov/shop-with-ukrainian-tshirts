import { useDispatch } from 'react-redux';
import sprite from '../../../public/svg/sprite.svg';
import { addToCart } from '../../redux/cart/cartSlice.js';
import styles from './ProductItem.module.css';

export default function ProductItem({ item }) {
  const { id, name, price, thumbnail, Images_to_product } = item;

  const dispatch = useDispatch();

  const handleAdd = () => {
    console.log(item);
    dispatch(addToCart(item));
  };
  return (
    <li id={id} className={styles.item}>
      <svg width="16" height="16" className={styles.iconLike}>
        <use xlinkHref={`${sprite}#icon-like`}></use>
      </svg>

      <div className={styles.imgContainer}>
        <img
          width="150px"
          height="300px"
          src={Images_to_product[0].Url_to_photo}
          className={styles.image}
        />
      </div>
      <div className={styles.descriptionWrap}>
        <div>
          <h2 className={styles.title}>{name}</h2>
          <p className={styles.price}>{price}₴</p>
        </div>
        <button onClick={handleAdd} className={styles.addBtn}>
          +
          {/* <svg width="20" height="20" className={styles.iconAdd}>
            <use xlinkHref={`${sprite}#icon-like`}></use>
          </svg> */}
        </button>
      </div>
    </li>
  );
}
