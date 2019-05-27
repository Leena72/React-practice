import React, { Component } from 'react'
import { connect } from 'react-redux';
import OrderTable from "./orderTable";
export class OrderDetails extends Component {
  render() {
    return (
      <div className="orderDetails">
        <h2>ORDER DETAILS</h2>
        <table className="order-detail-table">
          <tbody>
              <tr className="order-heading">
                <th>ITEM</th>
                <th>SIZE</th>
                <th>COLOR</th>
                <th>PRICE</th>
              </tr>

              {
                this.props.cartItems.map(item => (
                  <OrderTable
                    orderitem={item}
                  />
                ))
              }
              </tbody>
        </table>

        <div className="cart-total">
          <p>Total : <span>{parseInt(this.props.total) + 60}</span></p>
          <p></p>

          <p>GST 5% : <span>{this.props.total*0.05}</span></p>

          <p>Order Total : <span>{this.props.total+(this.props.total*0.05)}</span></p>
         
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.addToCart.addedItems,
    total:state.totalReducer.total
  }
}

export default connect(mapStateToProps, null)(OrderDetails);
