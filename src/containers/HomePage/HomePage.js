import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './HomePage.module.css';


import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles';
import ProductList from './../../components/ProductList/ProductList';
import * as actions from './../../store/actions/homePage';
//import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import QuckSearch from './../../components/Navigation/QuickSearch/QuickSearch'
import { thisExpression } from '@babel/types';



class HomePage extends Component {

    componentDidMount() {
        console.log('mounted')
        this.props.onInit();
    }

    render() {

        const slider = (
            <AwesomeSlider cssModule={AwsSliderStyles} className={styles.awsCustom}>
                <div data-src="http://localhost:3000/images/Slider1.jpg" />
                <div data-src="http://localhost:3000/images/Slider2.jpg" />
                <div data-src="http://localhost:3000/images/Slider3.jpg" />
            </AwesomeSlider>
        );
        if (this.props.productLists[0] !== undefined) {
            return (

                <div className={styles.homePageWrapper}>
                    <div className={styles.adds}>
                        
                    </div>
                    <div className={styles.contentWrapper}>
                        {slider}
                        <div className={styles.productLists}>
                            <ProductList productList={this.props.productLists[0].phones} title={this.props.productLists[0].title}></ProductList>
                            <ProductList productList={this.props.productLists[1].phones} title={this.props.productLists[1].title}></ProductList>
                        </div>
                    </div>
                    <div className={styles.adds}>
                        <QuckSearch />
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>Loading</div>
            )
        }

    }
}

function mapStateToProps(state) {
    if (state.homePage.listOfProducts[0] !== undefined) {
    }
    return {
        productLists: state.homePage.listOfProducts

    };
}

function mapDispatchToProps(dispatch) {
    return {
        onInit: () => dispatch(actions.fetchProduct())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);