import React, { Component } from 'react';
import ProductOptions from './ProductOptions';
import {
    Link
} from 'react-router-dom';

 class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showOptions: false,
            quantity: 0,
            selectSize: "Small"
        }
    }

    handleOnMouseEnter = (e) => {
        this.setState({
            showOptions: !this.state.showOptions
        })

    }


    render() {
        const { id, name, price, img } = this.props;
        return (
            <div id={id}
                className="product-container"
                onMouseEnter={this.handleOnMouseEnter}
                onMouseLeave={this.handleOnMouseEnter}
            >


                <div className="product-display" >
                   
                    
                    <div className="img-container" id="img-container">
                       <div className="imgblock">
                       <Link to={`/productdetails/${id}`}>  
                                 <img
                                    
                                    className="product-img"
                                    src={img}
                                    alt={name}
                                >
                                </img>
                        </Link> 
                    </div> 
                       
        {  /*    <ProductOptions/>*/}
        {this.state.showOptions ?
            <ProductOptions className="product-options"
                {...this.props}
        /> : null}
                    </div>
                    
                   

                   
                </div>

                <div className="product-detail">
                    <span className="product-name">{name}</span>
                    <span className="product-price">Rs {price}</span>
                </div>
            </div>
        )
    }
}

export default Product;
