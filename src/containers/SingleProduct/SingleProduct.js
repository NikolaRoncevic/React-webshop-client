import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/singleProduct'
import styles from './SingleProduct.module.css'

import SingleProductImage from './../../components/SingleProductImage/SingleProductImage';
import ProductDetail from '../../components/ProductDetails/ProductDetails';
import Price from '../../components/Price/Price';

class SingleProduct extends Component {
    componentDidMount() {
        this.props.onInit(this.props.match.params.id);
    }

    render() {

        let result = "blablabla";
        if (this.props.product.name !== undefined) {
            result = (
                <div className={styles.singleProductWrapper}>
                    <h1 className={styles.title}>{`${this.props.product.producer}/${this.props.product.name}/${this.props.product.screenSize}in`}</h1>
                    <div className={styles.content}>
                        <SingleProductImage src={`http://localhost:3000/images/${this.props.product.image}`} alt={this.props.product.name} />
                        <div className={styles.details}>
                            <h2 className={styles.detailsTitle}>Details</h2>
                            <ProductDetail label="Producer" details={this.props.product.producer} />
                            <ProductDetail label="Processor" details={this.props.product.processor} />
                            <ProductDetail label="Graphic card" details={this.props.product.processor} />
                            <ProductDetail label="Ram memory" details={this.props.product.ramMemory} />
                            <ProductDetail label="Screen size" details={this.props.product.screenSize} />
                            <Price price={this.props.product.price} discount={this.props.product.discounted.discountPrecentage} />
                            <form>
                                <input id="ammount" type="text" placeholder="Ammout"></input>
                                <input type="submit" value="Add to cart"></input>
                            </form>
                            

                        </div>
                    </div>

                </div>
            );
        }
        return result;
    }
}

function mapStateToProps(state) {

    return {
        product: state.product

    };
}

function mapDispatchToProps(dispatch) {
    return {
        onInit: (id) => dispatch(actions.fetchProduct(id))

    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleProduct);