import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from '../../redux/products/operations.js';
import ProductItem from '../ProductItem/ProductItem';

import css from '../Base.module.css';
import styles from './ProductList.module.css';

export default function ProductList({ gender }) {
  const { items } = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredItems = Array.isArray(items)
    ? items.filter(item => {
        return item.gender === gender || item.gender === 'unisex';
      })
    : [];

  return (
    <section className={css.container}>
      <ul className={styles.list}>
        {filteredItems.map(item => (
          <ProductItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
