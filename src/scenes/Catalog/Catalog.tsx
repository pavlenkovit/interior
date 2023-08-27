import { useState } from 'react';
import dataProducts from '../../data/products.json';
import { CardProduct } from '../../components/CardProduct';
import styles from './Catalog.module.scss';

export type SortType = 'new' | 'cheap' | 'expensive';

const getSortProducts = (products: typeof dataProducts, sortType: SortType) => {
  if (sortType === 'cheap') {
    return products.sort((product1, product2) => {
      if (product1.price < product2.price) {
        return -1;
      } else if (product1.price > product2.price) {
        return 1;
      }
      return 0;
    });
  }

  if (sortType === 'expensive') {
    return products.sort((product1, product2) => {
      if (product1.price > product2.price) {
        return -1;
      } else if (product1.price < product2.price) {
        return 1;
      }
      return 0;
    });
  }

  return products;
};

export const Catalog = () => {
  const [sortType, setSortType] = useState<SortType>('new');
  const options = [
    { id: 'new', text: 'Порядок: сперва новые' },
    { id: 'cheap', text: 'Порядок: сперва дешевле' },
    { id: 'expensive', text: 'Порядок: сперва дороже' },
  ];

  const products = getSortProducts(dataProducts, sortType);

  return (
    <>
      <div className={styles.selectorContainer}>
        <select
          onChange={event => {
            setSortType(event.target.value as SortType);
          }}
        >
          {options.map(option => (
            <option key={option.id} value={option.id} selected={sortType === option.id}>
              {option.text}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.grid}>
        {products.map(product => {
          return <CardProduct key={product.id} {...product} />;
        })}
      </div>
    </>
  );
};
