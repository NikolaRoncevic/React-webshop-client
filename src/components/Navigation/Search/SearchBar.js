

import styles from './SearchBar.module.css'
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom'
import * as actions from './../../../store/actions/searchPage';

import React, { Component } from 'react';

class SearchBar extends Component {
    routeToSearch(evt) {
        
        /* this.props.goToSearchPage(this.props.producer, this.props.ramMemory, this.props.processor, this.props.graphicCard, this.props.searchText, null, null); */
    }

    updateSearchField(evt) {

    }
    render() {
        return (
            <div>
                <form className={styles.form}>
                    <input className={styles.text} type="text" placeholder="Search" onChange={(evt) => this.updateSearchField(evt)}></input>
                    <NavLink to={`/search?producer=${this.props.producer}&ramMemory=${this.props.ramMemory}&processor=${this.props.processor}&graphicCard=${this.props.graphicCard}&search=${this.props.search}&maxPrice=${this.props.maxPrice}&minPrice=${this.props.minPrice}`}>
                        <button className={styles.submit} >Search</button>
                    </NavLink>
                </form>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        producer: state.search.producer,
        ramMemory: state.search.ramMemory,
        processor: state.search.processor,
        graphicCard: state.search.graphicCard,
        searchText: state.search.searchText
    }
}

function mapDispatchToProps(dispatch) {
    return {
        goToSearchPage: (producer,
            ramMemory,
            processor,
            graphicCard,
            searchText,
            maxPrice,
            minPrice) => dispatch(actions.fetchProduct(producer,
                ramMemory,
                processor,
                graphicCard,
                searchText,
                maxPrice,
                minPrice))

    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);