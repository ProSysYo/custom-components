import React from 'react';
import styles from './Content.module.css';
import { Route } from 'react-router-dom';
import InputPage from './../../pages/InputPage/InputPage';
import ButtonPage from './../../pages/ButtonPage/ButtonPage';

const Content = () => {
    return (
        <div className={styles.content}>
            <Route path='/input' render={ () => <InputPage/> }/>
            <Route path='/button' render={ () => <ButtonPage/>}/>
        </div>
    )
}

export default Content
