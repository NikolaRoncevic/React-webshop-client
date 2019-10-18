import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './HomePage.module.css';


import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles';



class HomePage extends Component {
    

    render() {
        
        const slider = (
            <AwesomeSlider cssModule={AwsSliderStyles} className={styles.awsCustom}>
              <div data-src="http://localhost:3000/images/Slider1.jpg" />
              <div data-src="http://localhost:3000/images/Slider2.jpg" />
              <div data-src="http://localhost:3000/images/Slider3.jpg" />
            </AwesomeSlider>
          );

        return (
            <div className={styles.contentWrapper}>
                {slider}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

export default connect(
    mapStateToProps,
)(HomePage);