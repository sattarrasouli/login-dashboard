import { forwardRef, InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className={`${styles.inputWrapper} ${className || ''}`}>
        {label && <label className={styles.label}>{label}</label>}
        <input ref={ref} className={`${styles.input} ${error ? styles.error : ''}`} {...props} />
        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
