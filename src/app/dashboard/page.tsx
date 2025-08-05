'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/Button/Button';
import styles from './dashboard.module.scss';

export default function DashboardPage() {
  const { user, logout, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/auth');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    router.push('/auth');
  };

  return (
    <div className={styles.container}>
      <div className={styles.dashboard}>
        <header className={styles.header}>
          <div className={styles.userInfo}>
            <div className={styles.avatar}>
              <Image src={user.picture.large} alt="Profile" width={80} height={80} />
            </div>
            <div className={styles.userDetails}>
              <h1 className={styles.welcomeMessage}>Welcome to the Dashboard</h1>
              <h2 className={styles.userName}>
                {user.name.title} {user.name.first} {user.name.last}
              </h2>
              <p className={styles.userEmail}>{user.email}</p>
            </div>
          </div>
          <div className={styles.logoutButton}>
            <Button onClick={handleLogout} variant="secondary">
              Logout
            </Button>
          </div>
        </header>

        <div className={styles.content}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>User Information</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.label}>Location:</span>
                <span className={styles.value}>
                  {user.location.city}, {user.location.country}
                </span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Phone:</span>
                <span className={styles.value}>{user.phone}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Age:</span>
                <span className={styles.value}>{user.dob.age} years</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
