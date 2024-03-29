import React,{Component} from 'react';
import { Route, Switch } from 'react-router-dom'

import SingleProduct from './containers/SingleProduct/SingleProduct'
import Layout from './hoc/Layout/Layout'
import HomePage from './containers/HomePage/HomePage';
import SearchPage from './containers/SearchPage/SearchPage';

class App extends Component {
  render() {
    return(
      <div>
        <Layout>
          <Switch>
            <Route path="/product/:id" component={SingleProduct} />
            <Route path="/search" component={SearchPage}/>
            <Route path="/" exact component={HomePage}/>
            
          </Switch>
        </Layout>
      </div>
    );
  }
}



export default App;
