import styles from './CartEmpty.module.css';

export default function CartEmpty() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>кошик</h2>
      <p className={styles.description}>ваш кошик порожній</p>
    </div>
  );
}
