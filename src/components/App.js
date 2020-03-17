import React from 'react'
import styles from'./App.module.css';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className={styles.wrap}>
        <Navbar />
    </div>
  );
}

export default App;
