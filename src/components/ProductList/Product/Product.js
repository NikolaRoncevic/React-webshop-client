import React from 'react';

import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import styles from './Product.module.css'
import ProductImage from './ProductImage/ProductImage';
import Price from '../../Price/Price';

const Product = (props) => (
    <div className={styles.productWrapper}>
        <ProductImage to={`/product/${props.phone._id}`}src={`http://localhost:3000/images/${props.phone.image}`} alt={props.phone.image} />
        <h1 className={styles.title}>{props.phone.name}</h1>
        <Price price={props.phone.price} discount ={props.phone.discounted}/>
        
    </div>
);

export default Product;