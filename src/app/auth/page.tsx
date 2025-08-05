'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Input } from '@/components/ui/Input/Input';
import { Button } from '@/components/ui/Button/Button';
import { loginSchema, LoginFormData } from '@/lib/validationSchema';
import { RandomUserResponse } from '@/types/user';
import styles from './auth.module.scss';

export default function AuthPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const validateForm = (data: LoginFormData): boolean => {
    try {
      loginSchema.parse(data);
      setErrors({});
      return true;
    } catch (error: unknown) {
      const fieldErrors: Record<string, string> = {};
      if (error && typeof error === 'object' && 'errors' in error) {
        (error as { errors: Array<{ path: string[]; message: string }> }).errors.forEach((err) => {
          fieldErrors[err.path[0]] = err.message;
        });
      }
      setErrors(fieldErrors);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData: LoginFormData = { phoneNumber };

    if (!validateForm(formData)) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('https://randomuser.me/api/?results=1&nat=us');
      const data: RandomUserResponse = await response.json();

      if (data.results && data.results.length > 0) {
        login(data.results[0]);
        router.push('/dashboard');
      }
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.authCard}>
        <div className={styles.header}>
          <h1 className={styles.title}>Welcome Back</h1>
          <p className={styles.subtitle}>Please enter your phone number to continue</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            label="Mobile Number"
            type="tel"
            placeholder="09123456789"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            error={errors.phoneNumber}
            className={styles.input}
          />

          <Button type="submit" loading={isLoading} className={styles.submitButton}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
