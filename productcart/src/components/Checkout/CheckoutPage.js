import React, { Component } from 'react';
import CheckoutTable from './../CheckoutTable/CheckoutTable';
// import Form from './../Form/Form';
import {billingData} from '../../Action/actions';
import { connect } from 'react-redux';
import OrderDetails from './OrderDetails';
import {
  Link
} from 'react-router-dom';

export class CheckoutPage extends Component {
  constructor(props){
    super(props);
    this.state={
      Name:"",
      Email:"",
      Address:"",
      City:"",
      ZipCode:"",
      Country:""

    }
  }

  handleChange = (e) => {
    this.setState({
    [e.target.name]: e.target.value
    });
    
    if (e.target.name === 'Name') {
    if (e.target.value === '') {
    this.setState({
    nameError: true
    })
    } else {
    this.setState({
    nameError: false,
    })
    }
    }
    
    
    if (e.target.name === 'Email') {
    
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (e.target.value.match(mailformat)) {
    this.setState({
    emailError: false
    })
    } else {
    this.setState({
    emailError: true,
    Email: e.target.value
    })
    }
    
    if (e.target.name === 'City') {
    if (e.target.value === '') {
    this.setState({
    cityError: true
    })
    } else {
    this.setState({
    cityError: false,
    })
    }
    }
    
    if (e.target.name === 'Address') {
    if (e.target.value === '') {
    this.setState({
    addressError: true
    })
    } else {
    this.setState({
    addressError: false,
    })
    }
    }
    
    if (e.target.name === 'ZipCode') {
    if (e.target.value.length > 6) {
    this.setState({
    zipcodeError: true
    })
    } else {
    this.setState({
    zipcodeError: false,
    })
    }
    }
    
    }
    }
 
    handleSubmit = (e) => {
      e.preventDefault();
      console.log("HandleSubmit Called",this.state);
      const {history} =this.props;
      this.props.billingData({
        ...this.state,
      })
      history.push('/placed');
    }
  
  

  render() {
    const { cartItems,total } = this.props;
    const {Name, ZipCode, Email, Address,City, Country} = this.state;

    return (
      <div className="checkoutPage">
        <p className="page-heading">CHECKOUT</p>
        <div className="breadcrumbs">  
        <Link className="links" to='/'>HOME | </Link>
        <Link className="links" to='/cart'>CART | </Link>
        <Link className="links" to='/checkout'>CHECKOUT </Link>
      </div>
        <div className="checkoutPage-wrapper">
        <table className="checkout-table">
          <tbody>
            <tr className="checkouttable-heading">
              <th>ITEM</th>
              <th>QTY</th>
              <th>PRICE</th>
            </tr>

            {
              cartItems.map(item => (
                <CheckoutTable
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  price={item.price*item.quantity}
                />
              ))
            }
          </tbody>
        </table>
        <div className="cart-total">
          <p>Shipping: <span>Rs. {60}</span> </p>
          <p>Total: <span>Rs. {parseInt(total)+60}</span> </p>
        </div>

        <div>
        <OrderDetails />
      </div>

        <div className="order-container">
          <div className="form-div">
          <div>
          <p className="billing">BILLING</p>
          <form className="checkout-form" onSubmit={this.handleSubmit}>
              <label className="formdetail">Name</label><input placeholder="Enter Name" type="text" name="Name" value={Name} onChange={this.handleChange} required />
              {this.state.nameError ? <p className="error-text" >Please enter name</p> : ''}
              <label className="formdetail">Email</label><input placeholder="Enter Email" type="email" required name="Email" value={Email} onChange={this.handleChange}/>
              {this.state.nameError ? <p className="error-text" >Please enter Email</p> : ''}

              <label className="formdetail">City</label><input placeholder="Enter City" type="text" name="City" value={City} required onChange={this.handleChange}/>
              {this.state.nameError ? <p className="error-text" >Please enter City</p> : ''}

              <label className="formdetail">Address</label><input placeholder="Enter Address" type="text" name="Address" value={Address} onChange={this.handleChange}/>
              <label className="formdetail">Zip-Code</label><input placeholder="Enter Zip-Code" type="number" onChange={this.handleChange} />
              <label className="formdetail">Country</label>
              <select name="Country" value={Country} onChange={this.handleChange}>
                  <option>India</option>
                  <option>US</option>
              </select>

   
          <button className="cart-buttons" type="submit" >Submit</button>

          </form>
      </div>
  {/*
            <div className="same-billing-checkbox">
              <label>Same as billing</label>
              <input className="checkbox" type="checkbox"></input>
            </div>
            <div>
          <form className="checkout-form">
                <label className="formdetail">Name</label><input type="text"></input>
                <label className="formdetail">Email</label><input type="Email"></input>
                <label className="formdetail">City</label><input type="text"></input>
                <label className="formdetail">Address</label><input type="text"></input>
                <label className="formdetail">ZipCode</label><input type="number"></input>
                <label className="formdetail">Country</label>
                <select>
                    <option>India</option>
                    <option>US</option>
                </select>
          </form>
  </div>*/}
          
 
        </div>
          
        </div>
             
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    cartItems: state.addToCart.addedItems,
    total: state.totalReducer.total,
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    billingData : (data) => dispatch(billingData(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);

// export default connect(mapStateToProps, null)(CheckoutPage);
