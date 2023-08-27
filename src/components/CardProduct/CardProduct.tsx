import type { FC } from 'react';
import styles from './CardProduct.module.scss';
import { ReactComponent as Bag } from '../../assets/bag.svg';
import { ReactComponent as Heart } from '../../assets/heart.svg';
import { addProduct } from '../../features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addProductToFavorites, deleteProductFromFavorites } from '../../features/favorites/favoritesSlice';
import { separateThousands } from '../../utils/separateThousands';

type CardProductProps = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
};

export const CardProduct: FC<CardProductProps> = product => {
  const { id, image, price, title, description } = product;
  const favoritesProducts = useAppSelector(state => state.favorites.products);
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
          <button
            className={styles.button}
            onClick={() => {
              if (!favoritesProducts.find(p => p.id === id)) {
                dispatch(addProductToFavorites(product));
                alert('Товар добавлен в избранное!');
              } else {
                dispatch(deleteProductFromFavorites(id));
                alert('Товар удален из избранного!');
              }
            }}
          >
            <Heart />
          </button>
        </div>
      </div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.description}>{description}</div>
      <div className={styles.price}>{separateThousands(price)} руб.</div>
    </div>
  );
};
