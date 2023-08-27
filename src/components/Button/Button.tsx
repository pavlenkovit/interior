import type { FC, PropsWithChildren } from 'react';
import styles from './Button.module.scss';

type ButtonProps = PropsWithChildren & {
  type?: 'light' | 'dark';
  className?: string;
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({ children, type = 'light', className, onClick }) => {
  return (
    <button className={`${styles.button} ${styles[type]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
