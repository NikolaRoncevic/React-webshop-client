import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavigationItem.module.css'



const NavitagionItem = (props) => (
    <li>
        <NavLink className={styles.NavigationItem}
            to={props.link}
            exact={props.exact}
        >{props.children}</NavLink>
    </li>
);

export default NavitagionItem;