import React from 'react';
import styles from './Content.module.css';
import { Route } from 'react-router-dom';
import InputPage from './../../pages/InputPage/InputPage';
import ButtonPage from './../../pages/ButtonPage/ButtonPage';
import TestMirage from '../../pages/TestMirage/TestMirage';

const Content = () => {
    return (
        <div className={styles.content}>
            <Route path='/input' render={ () => <InputPage/> }/>
            <Route path='/button' render={ () => <ButtonPage/>}/>
            <Route path='/testmirage' render={ () => <TestMirage/>}/>
        </div>
    )
}

export default Content
