import React, { Component } from 'react';
import { connect } from 'react-redux';
import Customerinfo from './Customerinfo';
import {emptyCart } from '../../Action/actions';
import OrderTable from './OrderTable';


export class Orderplaced extends Component {

    continueShopping = (event) => {
        event.preventDefault();
        this.props.emptyCart();
        this.props.history.push("/");
      }
    render() {
        console.log(this.props);
        const { billingData } = this.props;
        const actualBillingObject = billingData[0];

        return (
            <div className="finalOrderPage">
                <h3 className="page-heading1">Order placed successfully!!!</h3>
                <div className="orderpage">
                    <div className="final-order-div">
                    <div className="customerinfo">   <h3 className="headingh">CUSTOMER DETAILS</h3>
                   <Customerinfo items={actualBillingObject} /></div>  
                   <div className="orderinfo">  <h3 className="headingh">ORDER DETAILS</h3>
                    <OrderTable products={this.props.cartItems} /></div> 
                   </div>

                   <div className="shopping"><button className="cart-buttons" onClick={this.continueShopping}>Continue</button></div>
                   
                </div>
               
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.addToCart.addedItems,
        billingData: state.billingData
    }
}

const mapDispatchToProps = {
    emptyCart 
} 

export default connect(mapStateToProps, mapDispatchToProps )(Orderplaced);