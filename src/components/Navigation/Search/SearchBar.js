import React from 'react';

import styles from './SearchBar.module.css'

const SearchBar = (props) => (
            <div>
                <form className={styles.form}>
                    <input className={styles.text} type="text" placeholder="Search"></input>
                    <input className={styles.submit} type="submit" value="Search"></input>
                </form>
            </div>
    );

export default SearchBar;