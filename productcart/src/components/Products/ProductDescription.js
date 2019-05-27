import React, { Component } from 'react';
import {connect } from 'react-redux';
 class ProjectDescription extends Component {
    render() { 
      
        const { product, match } = this.props;
        const {name,description} = product;
        console.log('printing product',product);
        return ( 
            <div className="cart-page">
                <h3 className="page-heading"> PRODUCT DESCRIPTION</h3>
                <div className="imgblock">
           
                          <h1>product description page</h1>
                          <p>{name}</p>
                          <p>{description}</p>
                
             </div> 

            </div>
         )
    }
}
 const mapStateToProps = (state,ownProps) =>{
     const id = ownProps.match.params.id;
     const intId =parseInt(id,10);
     const product = state.addToCart.productDetails.find(item=> item.id === intId);
     return {
         product
     }

 }
export default connect(mapStateToProps,null)(ProjectDescription);