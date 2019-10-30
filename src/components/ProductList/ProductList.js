import React from 'react';

//import Auxiliary from './../../hoc/Auxiliary/Auxiliary';
import Product from './Product/Product'

import styles from './ProductList.module.css';

const ProductList = (props) => (
            <div className={styles.productListContentWrapper}>
                <h1 className={styles.title}>{props.title}</h1>
                <div className = {styles.products}>
                    {props.productList.map(phone => (
                        <Product key={phone._id} phone = {phone} />
                    ))}
                </div>

            </div>
    );

export default ProductList;