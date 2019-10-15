import React from 'react';

import NavigationItem from './NavigationItem/NavitagionItem';
import NavigationItemImage from './NavigationItemWithImage/NavigationItemWithImage';

import styles from './NavigationItems.module.css'

import cartImage from './../../../assets/icons8-shopping-cart-48.png'

const NavigationItems = (props) => (
       <ul className={styles.ul}>
           <NavigationItem link="/" exact>Home Page</NavigationItem>
           <NavigationItemImage link="/cart" exact image = {cartImage} alt="Cart"></NavigationItemImage>
           
        </ul>     
    );

export default NavigationItems;