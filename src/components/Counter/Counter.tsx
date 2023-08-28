import styles from './Counter.module.scss';
import type {ChangeEventHandler, FC} from 'react';
import { ReactComponent as Up } from '../../assets/up.svg';
import { ReactComponent as Down } from '../../assets/down.svg';

type CounterProps = {
  min?: number;
  max?: number;
  value: number;
  onChange: (value: number) => void;
}

export const Counter: FC<CounterProps> = ({min = 1, max = 9999, value, onChange}) => {
  const handleClickUp = () => {
    if (value >= max) {
      return;
    }
    onChange(value + 1);
  };

  const handleClickDown = () => {
    if (value <= min) {
      return;
    }
    onChange(value - 1);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const currentValue = +event.target.value;
    if (currentValue <= min || currentValue >= max) {
      return;
    }
    onChange(+event.target.value);
  };

  return (
    <div className={styles.container}>
      <input className={styles.input} type="number" min={min} max={max} step="1" value={value} onChange={handleChange} />
      <div className={styles.buttons}>
        <div className={`${styles.button} ${styles.up}`} onClick={handleClickUp}><Up /></div>
        <div className={`${styles.button} ${styles.down}`} onClick={handleClickDown}><Down /></div>
      </div>
    </div>
  )
}
