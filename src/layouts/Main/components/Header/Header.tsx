import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { ReactComponent as Cart } from '../../../../assets/cart.svg';
import { ReactComponent as Menu } from '../../../../assets/menu.svg';

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
      <nav className={styles.navigationMobile}>
        <Link className={styles.link} to="/">
          <Menu />
        </Link>
        <Link className={styles.link} to="cart">
          <Cart />
        </Link>
      </nav>
    </header>
  );
};
