import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/cart/cartSlice.js';
import styles from './CartItem.module.css';

export default function CartItem({ item }) {
  const { id, title, thumbnail, price } = item;

  const dispatch = useDispatch();

  const handleDelete = id => {
    console.log(id);
    dispatch(removeFromCart(id));
  };

  return (
    <li key={id} className={styles.item}>
      <img src={thumbnail} className={styles.image} width="145" />
      <div className={styles.descrWrap}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          <table className={styles.descriptionTable}>
            <tbody>
              <tr>
                <th>Колір</th>
                <td>white</td>
              </tr>
              <tr>
                <th>Розмір</th>
                <td>S</td>
              </tr>
              <tr>
                <th>Ціна</th>
                <td>540,00 грн</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <p className={styles.priceBig}>{price.final}грн</p>
          <select className={styles.quantity}>
            <option value="1"> 1</option>
            <option value="2"> 2</option>
          </select>
          <button onClick={() => handleDelete(id)} className={styles.deleteBtn}>
            <span>х</span> видалити
          </button>
        </div>
      </div>
    </li>
  );
}
