import React, { Component } from 'react';

import styles from './QuickSearch.module.css'
import { NavLink } from 'react-router-dom'



class QuickSearch extends Component {

    constructor(props){
        super(props)
        this.state ={
            producer: '',
            bottomPrice : '',
            maxPrice : '',
    
        }
    }
    updateProducer = (evt) => {
       
        this.setState({
            ...this.state,
            producer: evt.target.value
        });
    }
    updateBottomPrice = (evt) => {
       
        this.setState({
            ...this.state,
            bottomPrice: evt.target.value
        });
    }
    updateMaxPrice = (evt) => {
       
        this.setState({
            ...this.state,
            maxPrice: evt.target.value
        });
    }
    render() {
        return (
            <div >
                <form className={styles.forma} >
                    <span className={styles.label}>Proizvodjac:</span><br /><select id="producer" className={styles.input} onChange ={evt => this.updateProducer(evt)}>
                        <option value="Samsung" defaultValue>Samsung</option>
                        <option value="Apple">Apple</option>
                        <option value="LG">LG</option>
                    </select><br />
                    <span className={styles.label}>Cena:</span><br />
                    <input className={styles.input} type="text" placeholder="od" onChange ={evt => this.updateBottomPrice(evt)}></input>
                    <input className={styles.input} type="text" placeholder="do" onChange ={evt => this.updateMaxPrice(evt)}></input>
                    <NavLink to={`/search?producer=${this.state.producer}&maxPrice=${this.state.maxPrice}&minPrice=${this.state.bottomPrice}`}><button>Search</button></NavLink>
                </form>
            </div>
        );
    }
}




export default QuickSearch;