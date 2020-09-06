import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import Add from './components/Add';


export default class App extends Component {
    render(){
    return (
        <BrowserRouter>
             <Switch>
              <Route path="/" component={ProductList} exact/>
              <Route path='/add' component={Add} />
              
              {/* <Route path='/update/:id' component={Update} /> */}
            </Switch>
        </BrowserRouter>
        );
  }}

