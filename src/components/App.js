import React from 'react'
import styles from'./App.module.css';
import Navbar from './Navbar/Navbar';
import Menu from './Menu/Menu';
import Content from './Content/Content';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className={styles.wrap}>
        <BrowserRouter>     
            <Navbar />
            <Menu />
            <Content /> 
        </BrowserRouter>
    </div>
  );
}

export default App;
