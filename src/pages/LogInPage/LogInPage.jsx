import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';
// import baseStyle from '../../components/Base.module.css';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/operations.js';

export default function LogInPage() {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const submit = data => {
    dispatch(loginThunk(data));
    reset();
  };
  return (
    <>
      <Header />
      {/* <div className={`${baseStyle.container}`}> */}
      <div className={styles.boxForWrappers}>
        <div className={styles.wraperFormAuth}>
          <h2 className={styles.titleLogin}>ВХІД</h2>
          <form onSubmit={handleSubmit(submit)}>
            <div className={styles.boxInputs}>
              <input
                {...register('email')}
                className={styles.inputStyles}
                type="email"
                required
                placeholder="електронна пошта *"
              />
              <input
                {...register('password')}
                className={styles.inputStyles}
                type="password"
                required
                placeholder="пароль *"
              />
            </div>
            <div className={styles.boxCheckboxAndLink}>
              <label htmlFor="agree" className={styles.boxLabel}>
                <input type="checkbox" id="agree" name="agree" />
                <p className={styles.textRememberData}>
                  Запам&apos;ятати введені дані
                </p>
              </label>
              <Link to="/restoration" className={styles.restorationLink}>
                Забули пароль?
              </Link>
            </div>
            <button className={styles.buttonLogin} type="submit">
              увійти до особистого кабінету
            </button>
          </form>
        </div>
        <div className={styles.tabletRectigleStyles}></div>
        <div className={styles.rectigleStyles}></div>
        <div className={styles.mobileRectigleStyles}></div>
        <div className={styles.boxNavToRegister}>
          <h2 className={styles.titleLoginPageRegister}>
            ЗАРЕЄСТРУЙТЕСЯ ЗАРАЗ
          </h2>
          <p className={styles.registerText}>
            Зареєструйтеся для оформлення замовлення
          </p>
          <Link to="/register" className={styles.navLinkRegister}>
            ЗАРЕЄСТРУВАТИСЬ
          </Link>
        </div>
      </div>
      {/* </div> */}
      <Footer />
    </>
  );
}
