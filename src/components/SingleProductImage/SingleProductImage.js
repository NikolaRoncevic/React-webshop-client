import React from 'react';

import styles from './SingleProductImage.module.css'

const SingleProductImage = (props) => (
    <img className={styles.img} src={props.src} alt={props.alt}></img>
);

export default SingleProductImage;