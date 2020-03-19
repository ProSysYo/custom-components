import React from 'react';
import styles from './Button.module.css';
import classNames from 'classnames';
import T from 'prop-types';

const Button = ({children, img, color, ...atrs}) => {
    return (
        <button 
            className={classNames(styles.btn, styles[color])}            
            {...atrs}
        >
            {img &&
                <img src={img} className={styles.img} alt=""/>
            }
            {children}
        </button>
    )
}
Button.propTypes = {
    children: T.node,
    img: T.string,
    color: T.oneOf(['blue','red'])
}
export default Button;