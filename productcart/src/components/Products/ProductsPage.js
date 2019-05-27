import React, { Component } from 'react';
import Product from './Product';
import CartHover from './CartHover';
import { connect } from 'react-redux';
import cart from './../../cart.svg';
import {addProduct} from '../../Action/actions';
import {
  Link
} from 'react-router-dom';

export class ProductsPage extends Component {

  constructor(props)
  {
    super(props);
    this.state={
      carthover:false
    }
  }
 
  carthover = (event) =>

{
  event.stopPropagation();
  this.setState({
    carthover: !this.state.carthover,
  })
}

  addItem= (product) => {
    console.log("clicked", product);
    this.props.addProduct(product);
    console.log("product added");
  }

  render() { 

    let productDetails = this.props.productDetails;
    const {itemCount} = this.props;

    return (
      <div className="product-page clearfix">


      <div className="cartshop">

      <p className="page-heading">Lets Shopping...</p>
        <div className="breadcrumbs"><Link className="links" to='/'>HOME</Link></div> 

      </div>


        <div className="cart-icon" 
        onMouseEnter={this.carthover}
        onMouseLeave={this.carthover}
        >
        {
          itemCount === 0 ? <Link to='/'><img className="cart-icon-img"src={cart} alt="cart"></img></Link>
           :
          <Link to='/cart'><img className="cart-icon-img"src={cart} alt="cart"></img></Link>
          
        }
        <div className="cart-value">{itemCount}</div>
          
          
        </div>

        <div className="product-wrapper">

          {
            productDetails.map(item => {
              return (
                <Product
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  img={item.img}
                  units={item.units}
                  addItem={this.addItem}
                />
              )
            }
            )
          }
        
        </div>
        
            <div>
        {this.state.carthover ? <CartHover/> : null}
          
            </div>

      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    itemCount:state.addToCart.addedItems.length,
    addProduct: state.addProduct,
    ...state.change_reducer
  }
}

const mapDispatchToProps = (dispatch) => ({
  addProduct: (data) => dispatch(addProduct(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
