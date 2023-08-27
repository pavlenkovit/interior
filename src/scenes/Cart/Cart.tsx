import styles from './Cart.module.scss';
import { ProductsTable } from './components/ProductsTable';
import { ProductForm } from './components/ProductForm';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { clearProducts } from '../../features/cart/cartSlice';

export const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.tableWrapper}>
        <ProductsTable />
        <div className={styles.buttons}>
          <Button className={styles.button} onClick={() => dispatch(clearProducts())}>
            Очистить корзину
          </Button>
          <Button className={styles.button} type="dark" onClick={() => navigate('/')}>
            Продолжить покупки
          </Button>
        </div>
      </div>
      <ProductForm />
    </div>
  );
};
