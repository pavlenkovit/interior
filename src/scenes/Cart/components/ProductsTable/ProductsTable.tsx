import styles from './ProductsTable.module.scss';
import { useAppSelector, useAppDispatch } from '../../../../app/hooks';
import { changeProductCount, deleteProduct } from '../../../../features/cart/cartSlice';
import { separateThousands } from '../../../../utils/separateThousands';

export const ProductsTable = () => {
  const products = useAppSelector(state => state.cart.products);
  const dispatch = useAppDispatch();
  if (!products.length) {
    return <div>В корзине пусто</div>;
  }
  return (
    <table className={styles.table}>
      <tr>
        <th>Товар</th>
        <th>К-во</th>
      </tr>
      {products.map(({ id, image, title, description, price, count }) => {
        return (
          <tr key={id}>
            <td>
              <div className={styles.container}>
                <div className={styles.imageWrapper}>
                  <img className={styles.image} src={`${image}`} />
                </div>
                <div className={styles.content}>
                  <h2 className={styles.title}>{title}</h2>
                  <div className={styles.description}>{description}</div>
                  <div className={styles.price}>{separateThousands(price)} руб.</div>
                  <div>
                    <a
                      className={styles.link}
                      href="#"
                      onClick={e => {
                        e.preventDefault();
                        dispatch(deleteProduct(id));
                      }}
                    >
                      Удалить
                    </a>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <input
                className={styles.inputNumber}
                type="number"
                value={count}
                onChange={e => {
                  dispatch(changeProductCount({ id, count: +e.target.value }));
                }}
              />
            </td>
          </tr>
        );
      })}
    </table>
  );
};
