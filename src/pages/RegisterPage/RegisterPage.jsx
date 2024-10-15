import Header from '../../components/Header/Header';
import styles from './RegisterPage.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { registerThunk } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import Footer from '../../components/Footer/Footer';

const schema = yup.object().shape({
  password: yup.string(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Паролі мають співпадати'),
});

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const submit = data => {
    dispatch(registerThunk(data));
    reset();
  };
  return (
    <>
      <Header />
      <div className={styles.wraperRegisterPage}>
        <div className={styles.boxForImageLeft}></div>
        <form className={styles.formStyles} onSubmit={handleSubmit(submit)}>
          <h1 className={styles.titleregister}>РЕЄСТРАЦІЯ</h1>
          <div className={styles.wrapperForm}>
            <ul className={styles.listInputsLeft}>
              <li>
                <input
                  {...register('name')}
                  type="text"
                  required
                  className={styles.inputsStyle}
                  placeholder="ім’я *"
                />
              </li>
              <li>
                <input
                  {...register('surname')}
                  type="text"
                  required
                  className={styles.inputsStyle}
                  placeholder="прізвище *"
                />
              </li>
              <li>
                <input
                  {...register('email')}
                  type="email"
                  required
                  className={styles.inputsStyle}
                  placeholder="електронна пошта *"
                />
              </li>
            </ul>
            <ul className={styles.listInputsRight}>
              <li>
                <input
                  {...register('phone')}
                  type="phone"
                  required
                  className={styles.inputsStyle}
                  placeholder="мобільний телефон *"
                />
              </li>
              <li>
                <input
                  {...register('password')}
                  type="password"
                  required
                  className={styles.inputsStyle}
                  placeholder="пароль *"
                />
              </li>
              <li>
                <input
                  {...register('password_confirmation')}
                  type="password"
                  required
                  className={styles.inputsStyle}
                  placeholder="підтвердження паролю *"
                />
                {errors.confirmPassword && (
                  <p>{errors.confirmPassword.message}</p>
                )}
              </li>
            </ul>
          </div>
          <div className={styles.boxLabelAndButton}>
            <label htmlFor="agree" className={styles.boxLabel}>
              <p className={styles.textagree}>
                <input
                  type="checkbox"
                  id="agree"
                  name="agree"
                  required
                  className={styles.checkBoxRegister}
                />
                Я погоджуюсь із Умовами надання послуг та Політикою
                конфіденційності
              </p>
            </label>
            <button className={styles.registerButton} type="submit">
              зареєструватися
            </button>
          </div>
        </form>
        <div className={styles.boxForImageRight}></div>
        <div className={styles.boxForImageBottom}></div>
        <div className={styles.boxForImageBottomTablet}></div>
      </div>
      <Footer />
    </>
  );
}
