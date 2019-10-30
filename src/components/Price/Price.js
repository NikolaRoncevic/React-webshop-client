import React from 'react';

import styles from './Price.module.css';

const Price = (props) => {
    let ret = (
        <span>Price:<span className={styles.noDiscount}> {props.price}</span></span>
    );
    if (props.discount !== undefined) {
        ret = (
            <div className={styles.wrapper}>
                <p>
                    Old price:<span className={styles.oldPrice}> {props.price}</span>
                </p>
                <p>
                    New price:<span className={styles.newPrice}> {props.price * ((100 - props.discount.discountPrecentage) / 100)}</span>
                </p>
            </div>
        );
    }
    return ret;
}

export default Price;