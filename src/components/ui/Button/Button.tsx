import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  className?: string;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  loading = false,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className || ''}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className={styles.spinner}>
          <div className={styles.spinnerIcon}></div>
        </div>
      ) : (
        children
      )}
    </button>
  );
};
