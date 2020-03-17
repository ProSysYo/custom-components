import React, { useState } from 'react';
import T from 'prop-types';
import classNames from 'classnames';
import styles from './Input.module.css';

const Input = ({id, img, label, error, size, ...attrs}) => {
    const [inputFocus, setInputFocus] = useState(false);
    const setFocus = () => {        
        setInputFocus(inputFocus => !inputFocus)
    } 
    const classes = classNames(
        styles.inputWrapper,       
        {[styles.focus]: inputFocus === true},
        {[styles.error]: error}
    )
    return (        
        <div className={styles.labelsWrapper}>
            {label &&
                <label className={styles.inputLabel} htmlFor={id}>{label}</label>
            }
            
            <div className={classes}>
                {img &&
                    <label htmlFor={id}>
                        <img className={styles.img} src={img} alt=""/>
                    </label>
                }            
                <input
                    name={id}
                    id={id}          
                    type='text'
                    className={classNames(styles.input, styles[size])}
                    onFocus={setFocus}
                    onBlur={setFocus}
                    autoсomplete="off"
                    {...attrs}
                />
            </div>
            {error &&
                <span className={styles.inputError}>{error}</span>
            }
        </div>
    )
}

Input.propTypes = {
    id: T.string.isRequired,
    img: T.string,
    label: T.string,
    error: T.string,
    size: T.oneOf(['small', 'normal', 'big'])
}

export default Input;
