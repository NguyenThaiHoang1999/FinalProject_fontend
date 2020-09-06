import React, { Component } from 'react'
// import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

export default class Item extends Component {
    constructor(props){
        super(props);
        this.state={
            product: {} ,                       
           
        }
    }

    // onDelete=(id)=>{
    //     if(confirm('bn muon xoa')){
    //         this.props.onDelete(id);
    //     }
    // }
    render() {
        var { product } = this.props;
        var index =this.props.index;
        return (
            <tr>
                <td>
                    {index + 1}
                </td>
                <td>{product.product_name}</td>
                <td>{product.product_desc}</td>
                <td>{product.product_price}</td>
                
                <td><img alt="" src={product.product_image} height="80" width="80"></img></td>


                <td className="text-center">
                    {/* <NavLink to={'/Add.js'}><button type="button" onClick={}>update</button></NavLink> */}
                    {/* <button type="button" onClick={()=>this.onDelete(product.id)}>Xoa</button> */}
                </td>
            </tr>
        )
    }
}
