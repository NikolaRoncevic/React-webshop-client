import React from 'react';

import Logo from '../../Logo/Logo';
import SearchBar from '../Search/SearchBar';
import NavigationItems from '../NavigationItems/NavigationItems';

import styles from './Toolbar.module.css'
const Toolbar = (props) => {
    return (
        <header className={styles.Toolbar}>
            <div>
                <Logo />
            </div>
            <div>
                <SearchBar />
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </header>
    );
};

export default Toolbar;
