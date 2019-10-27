import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import * as actions from './../../store/actions/searchPage'

import styles from './SearchPage.module.css'

class SearchPage extends Component {

    componentDidMount() {
        console.log(this.getQueryVariable('producer'));
        //console.log(this.props.location.search.substring(1))
        this.props.onInit(this.getQueryVariable('producer'),
            this.getQueryVariable('ramMemory'), 
            this.getQueryVariable('processor'), 
            this.getQueryVariable('graphicCard'), 
            this.getQueryVariable('searchText'), 
            this.getQueryVariable('maxPrice'), 
            this.getQueryVariable('minPrice'));


    }
    getQueryVariable(variable) {
        var query = this.props.location.search.substring(1);
        //console.log(query + '        prazno a')//"app=article&act=news_content&aid=160990"
        var vars = query.split("&");
        //console.log(vars) //[ 'app=article', 'act=news_content', 'aid=160990' ]
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            //console.log(pair)//[ 'app', 'article' ][ 'act', 'news_content' ][ 'aid', '160990' ] 
            if (pair[0] === variable) { return pair[1]; }
        }
        return (undefined);
    }

    render() {
        return (
            <div className={styles.searchPageWrapper}>
                <div className={styles.adds}></div>
                <p>HEHEHEHHEHE</p>
                <div className={styles.adds}></div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state.search)
    return {
        listOfProducts: state.search.listOfProducts,
        producer: state.search.producer,
        ramMemory: state.search.ramMemory,
        processor: state.search.processor,
        graphicCard: state.search.graphicCard,
        searchText: state.search.searchText,
        maxPrice: state.search.maxPrice,
        minPrice: state.search.minPrice,

    };
}

function mapDispatchToProps(dispatch) {
    return {
        onInit: (producer, ramMemory, processor, graphicCard, searchText, maxPrice, minPrice) => dispatch(actions.fetchProduct(producer, ramMemory, processor, graphicCard, searchText, maxPrice, minPrice))

    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(SearchPage));