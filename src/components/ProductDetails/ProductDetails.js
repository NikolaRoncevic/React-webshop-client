import React from 'react';

import styles from './ProductDetails.module.css';

const ProductDetails = (props) => (
            <p className = {styles.p}><strong>{props.label}: </strong>{props.details}</p>
    );

export default ProductDetails;