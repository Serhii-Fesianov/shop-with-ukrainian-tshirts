import { useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';

import css from '../Base.module.css';
import styles from './CartList.module.css';

export default function CartList() {
  const { items } = useSelector(state => state.cartProducts);

  return (
    <div className={css.container}>
      <ul className={styles.list}>
        {items.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
