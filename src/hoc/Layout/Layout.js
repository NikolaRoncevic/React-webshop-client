import React, { Component } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

import styles from './Layout.module.css'

class Layout extends Component {
    render() {
        return (
            <div className ={styles.div}>
                <Toolbar></Toolbar>
                <div>
                    {this.props.children}
                </div>
            </div>

        );
    }
}

export default Layout;

