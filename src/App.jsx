import React from 'react';
import Button from './component/Button';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Create a button in a separate file</h1>
      <Button className={styles.button} onClick={() => alert('Create a button in a separate file')}>
        Click
      </Button>
      <Button className={styles.button} onClick={() => alert('Create a button in a separate file')}>
        Click
      </Button>
    </div>
  );
}
