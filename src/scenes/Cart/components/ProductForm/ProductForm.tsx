import styles from './ProductForm.module.scss';
import { Button } from '../../../../components/Button';
import { separateThousands } from '../../../../utils/separateThousands';
import { useAppSelector } from '../../../../app/hooks';

export const ProductForm = () => {
  const products = useAppSelector(state => state.cart.products);
  const price = products.reduce((currentValue, product) => {
    return product.price * product.count + currentValue;
  }, 0);
  return (
    <div className={styles.container}>
      <form>
        <h2 className={styles.title}>Оформление заказа</h2>
        <input placeholder="Имя Фамилия" className={styles.input} />
        <input placeholder="+ 7 904 000 80 80" className={styles.input} />
        <input placeholder="Адрес доставки" className={styles.input} />
        <div className={styles.price}>
          Итого: <b>{separateThousands(price)} руб.</b>
        </div>
        <Button className={styles.button} onClick={e => e.preventDefault()}>
          Оформить заказ
        </Button>
      </form>
    </div>
  );
};
