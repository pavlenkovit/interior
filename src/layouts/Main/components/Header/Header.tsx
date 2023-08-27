import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.container}>
      <Link className={styles.logo} to="/">
        Интерьер.
      </Link>
      <nav className={styles.navigation}>
        <Link className={styles.link} to="/">
          Каталог
        </Link>
        <Link className={styles.link} to="cart">
          Корзина
        </Link>
      </nav>
    </header>
  );
};
