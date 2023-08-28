import type { FC } from 'react';
import styles from './CardProduct.module.scss';
import { ReactComponent as Bag } from '../../assets/bag.svg';
import { addProduct } from '../../features/cart/cartSlice';
import { useAppDispatch } from '../../app/hooks';
import { separateThousands } from '../../utils/separateThousands';

type CardProductProps = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
};

export const CardProduct: FC<CardProductProps> = product => {
  const { image, price, title, description } = product;
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={`${image}`} />
        <div className={styles.actions}>
          <button
            className={styles.button}
            onClick={() => {
              dispatch(addProduct(product));
            }}
          >
            <Bag />
          </button>
        </div>
      </div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.description}>{description}</div>
      <div className={styles.price}>{separateThousands(price)} руб.</div>
    </div>
  );
};
