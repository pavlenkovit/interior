import type {FC, MouseEventHandler, PropsWithChildren} from 'react';
import styles from './Button.module.scss';

type ButtonProps = PropsWithChildren & {
  type?: 'light' | 'dark';
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button: FC<ButtonProps> = ({ children, type = 'light', className, onClick }) => {
  return (
    <button className={`${styles.button} ${styles[type]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
