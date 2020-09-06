import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import toastr from "toastr";



export default class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // newProduct: {
                // product_name:'',
                // category_id:'',
                // brand_id:'',
                // product_desc:'',
                // product_content:'',
                // product_price:'',
                // product_image:'',
                // product_status:''
            // }
        }
        this.onLoadedImg=this.onLoadedImg.bind(this)
        this.onChange = this.onChange.bind(this);
        this.onSave=this.onSave.bind(this);
        
    }
    // componentDidMount() {
    //     var { match } = this.props;
    //     if (match) {
    //         var id = match.params.id;
    //         axios.get('http://127.0.0.1:8000/api/${id}').then(res => {
    //             var data = res.data;
    //             this.setState({
    //                 newProduct: data

    //             });
    //         }).catch(err => {});
    //     }
    // }
    onChange(event) {
        var target = event.target;
        var name =target.name; //product_name
        var value = target.value;
        var type = target.type;
        
        if (type === "file") {
            // console.log(newProduct)
            var nput =event.target;
      
            var reader= new FileReader();
                reader.onload=function(){
                    // var dataURL = reader.result;
                    // var output = document.getElementById('preImg');
                    // output.src = dataURL;
                    // console.log(dataURL);
                    value=reader.result;
                    this.onLoadedImg(reader.result);
                }
                // value=reader.result;
                reader.readAsDataURL(nput.files[0]);    
                console.log(value);    
        }else{
            
            this.setState({
                [name]: value
            }); 

        }
       
    }

    onLoadedImg(data){
        this.setState({product_image:data})
    }
    componentDidUpdate(){
        console.log(this.state);
    }
    
    onSave(e) {
        e.preventDefault();
        var { newProduct } = this.state;
        // var { history } = this.props;
        if (newProduct.product_name === "" && newProduct.product_image  === "" && newProduct.product_desc) {
            toastr.warning('Vui long nhap noi dung');
        }else{
            console.log('add');
            axios.post('http://127.0.0.1:8000/api',{newProduct})
            .then(res=>console.log(res));
            // axios({
            //     method: "POST",
            //     url: 'http://127.0.0.1:8000/api',
            //     data: {
            //         newProduct
            //     }

            // }).then(res => {
            //     // toastr.success("them sp thanh cong", {})
            //     // history.goBack();
            //     console.log(res);
            // });
        }

        if (newProduct.product_id) {
            axios({
                method: "PUT",
                url: 'http://127.0.0.1:8000/api/${id}',
                data: {
                    newProduct
                }

            }).then(res => {
                // toastr.success("update sp thanh cong", {})
                // history.goBack();
                console.log(res);
            });
        }

    }

    onClear() {
        this.setState({
            name: '',
            image: ''
        });

    }

    render() {
 

        return (
            <div>
            <form onSubmit = { this.onSave }  method = "POST" role = "form" encType="multipart/form-data" >
            <div className = "form-group" >
            <label class = "sr-only" for = "" > Name </label>
            <input type = "text" class = "form-control" name = "product_name" value={this.state.product_name} onChange = { this.onChange}  placeholder = "" required> 
            </input> 
            </div > 
            <div className = "form-group" >
            <label class = "sr-only" for = "" > category </label>
            <input type = "text" class = "form-control" name = "category_id" value = {this.state.category_id} onChange = { this.onChange} placeholder = "Input" > 
            </input> 
            </div> 
            <div className = "form-group" >
            <label class = "sr-only" for = "" >brand</label>
            <input type = "text" class = "form-control" name = "brand_id" value = {this.state.brand_id} onChange = { this.onChange}  placeholder = "Input" > 
            </input> 
            </div> 
            <div className = "form-group" >
            <label class = "sr-only" for = "" > product_desc</label>
            <input type = "text" class = "form-control" name = "product_desc" value = {this.state.product_desc} onChange = { this.onChange}  placeholder = "Input" > 
            </input> 
            </div > 
            <div className = "form-group" >
            <label class = "sr-only" for = "" > product_status</label>
            <input type = "text" class = "form-control" name = "product_status" value = {this.state.product_status} onChange = { this.onChange} id = "" placeholder = "Input" > 
            </input>
            </div > 
            <div className = "form-group" >
            <label class = "sr-only" for = "" > product_content</label>
            <input type = "text" class = "form-control" name = "product_content" value = {this.state.product_content} onChange = { this.onChange} id = "" placeholder = "Input" > 
            </input> 
            </div > 
            <div className = "form-group" >
            <label class = "sr-only" for = "" > product_price</label>
            <input type = "text" class = "form-control" name = "product_price" value = {this.state.product_price} onChange = { this.onChange} id = "" placeholder = "Input" > 
            </input> 
            </div > 
            <div className = "form-group" >
            <label class = "sr-only" for = "" > Image </label> 
            <input type = "file" class = "form-control" name = "product_image" value={this.state.product_image} onChange = { this.onChange } placeholder = "Input field" ></input> 
            </div>
            <button type = "submit" class = "btn btn-primary" > Submit </button>
             </form >
             </div>


        )
    }
}