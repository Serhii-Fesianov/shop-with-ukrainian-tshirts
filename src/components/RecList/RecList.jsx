import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../ProductItem/ProductItem';
import { fetchProducts } from '../../redux/products/operations.js';

import css from '../Base.module.css';
import styles from './RecList.module.css';

export default function RecList() {
  const { items } = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <section className={`${css.container} ${styles.container}`}>
      <h2 className={styles.title}>Рекомедовані товари</h2>
      <ul className={styles.list}>
        {Array.isArray(items)
          ? items.map(item => <ProductItem key={item.id} item={item} />)
          : null}
      </ul>
    </section>
  );
}
