import { NavLink } from 'react-router-dom';

import notFoundImg from '../../../public/images/notFound.png';

import css from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <div className={css.wrap}>
      <img src={notFoundImg} className={css.image} />
      <h1 className={css.title}>404</h1>
      <NavLink to="/" className={css.backBtn}>
        повернутись на головну
      </NavLink>
    </div>
  );
}
