import React from 'react'
import styles from './Menu.module.css'
import { NavLink } from 'react-router-dom'

const MenuItem = (props) => {
    return (
        <li className={styles.menuItem}>
            <NavLink to={props.to} activeClassName={styles.activeLink}>{props.name}</NavLink>            
        </li>
    )
}

const Menu = () => {
    return (
        <div className={styles.menu}>
            <MenuItem to='/input' name='Input'></MenuItem>
            <MenuItem to='/button' name='Button'></MenuItem>
            <MenuItem to='/checkbox' name='Checkbox'></MenuItem> 
            <MenuItem to='/table' name='Table'></MenuItem> 
            <MenuItem to='/form' name='Form'></MenuItem>
            <MenuItem to='/modal' name='Modal'></MenuItem>
            <MenuItem to='/card' name='Card'></MenuItem>
            <MenuItem to='/crud' name='CRUD react+redux'></MenuItem>  
            <MenuItem to='/other' name='Other'></MenuItem>                
        </div>
    )
}

export default Menu
