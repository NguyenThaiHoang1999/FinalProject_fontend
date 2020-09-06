import React, { Component } from 'react';

import axios from 'axios';
import {
    
    
    NavLink
  } from "react-router-dom";

import Item from './Item';



export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        }
    }
    componentDidMount() {
        axios({
            method: "GET",
            url: 'http://127.0.0.1:8000/api',
            data: null,
        }).then(re => { this.setState({ products: re.data }); }).catch(err => { console.log(err) });
    }

    onChange(event) {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }
    // onDelete(id) {
        
    //     return (e) => {

    //     }
    // }
    render() {
        var products  = this.state.products;
        return ( 
        <React.Fragment >

            <div id = "wrapper" >
            <NavLink to = "/add" >< button type = "button" className = "btn btn-large btn-block btn-default" > them </button></NavLink >

            {
                /* <input className="" type="search" class="form-control" name="keyword" value={keyword} onChange={this.onChange} id="exampleInputAmount" placeholder="Search">
                             </input> */
            } 
            </div>  

            <table className = "table table-bordered table-hover" >
           
             <tbody > {
                products.map(( item, index) =><Item product = {item } index = { index } ></Item>)
            } </tbody>
             </table >

        </React.Fragment>


        )
    }
}