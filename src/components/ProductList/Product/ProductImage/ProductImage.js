import React from 'react';

import styles from './ProductImage.module.css'
import {NavLink} from 'react-router-dom'

const ProductImage = (props) => (
        <NavLink to={props.to}><img className={styles.img} src={props.src} alt={props.alt}></img></NavLink>
    );

export default ProductImage;