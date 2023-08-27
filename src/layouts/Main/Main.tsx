import { Header } from './components/Header';
import type { FC, PropsWithChildren } from 'react';
import styles from './Main.module.scss';

export const Main: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
};
