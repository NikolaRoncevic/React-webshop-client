import React from 'react';
import {NavLink} from 'react-router-dom';

import pageLogo from '../../assets/jeftino.png';
import styles from './Logo.module.css'
const Logo = (props) => (
          <NavLink to="/"><img className={styles.slika} src={pageLogo} alt="MyBurger"></img></NavLink>
          
    );

export default Logo;