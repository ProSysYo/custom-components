import React from 'react';
import styles from './Navbar.module.css';
import Input from './../Input/Input';
import search from '../../assets/img/search.svg';

const Navbar = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}> 
                <span className={styles.logoImg}></span>
                <span className={styles.logoText}>React Components</span>
            </div>
            <div>
                <ul className={styles.headerRigth}>                    
                    <li><Input id='search' img={search} placeholder='Поиск' size='normal'/></li>
                    <li><span className={styles.user}></span></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
