import React from 'react';

import {NavLink} from 'react-router-dom';
import styles from './NavigationItemWithImage.module.css'

const NavigationItemWithImage = (props) => (
            <li>
                <NavLink className = {styles.NavigationItem}
                    to = {props.link}
                    exact = {props.exact}>
                    <img className = {styles.img} src={props.image} alt={props.alt}></img>
                </NavLink>
            </li>
    );

export default NavigationItemWithImage;