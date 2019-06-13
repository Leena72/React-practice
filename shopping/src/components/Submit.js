import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import {clearProducts} from '../Action';
import Footer from './Footer';
class Submit extends Component {
    constructor(props) {
        super(props);
        this.state = {   
          
         }
    }

    clearAll = (e) => {
        let { clearProducts } = this.props;
        
        clearProducts();
    }

    handleClick = () =>{
        this.props.history.push('/');
        this.clearAll();
    }

    render() { 
        let {cart} = this.props;
        let itemKeys = Object.keys(cart);
        console.log('submit',this.props.cart);
        return ( 
            <div>
            <div className="breadcrumb">  <h5 className="header-heading">Lets  Shop !!!</h5></div>
                <div className="">
             
                    <h2 className="blink_me submitted">Order has been placed Successfully !!!</h2>
                  <div className="submit-btn">  <button type="button" className="cart-buttons sub" 
                  onClick={this.handleClick}>CONTINUE</button></div>
                  
                </div>

                <div className="billDetailsSubmit">
                    <h5 className="your-details-head">Your Details</h5>
                   <p className="user-details">{ itemKeys.map(item =>
                    <>
                      {item} : <p className="cart-item">{cart[item]}</p>
                    </>
                   )
                   }</p>
                </div>
                <Footer/>
            </div>
         );
    }
}
const mapStateToProps =  (state) =>({
    cart : state.BillingAddress.tempData,
    delete: state.shoppingCartReducer,
})

const mapDispatchToProps = (dispatch) => ({
    clearProducts: (data) => dispatch(clearProducts(data)),
})

export default connect(mapStateToProps,mapDispatchToProps)(Submit);