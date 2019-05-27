import React, { Component } from 'react'

export class CheckoutTable extends Component {
  render() {
    const {name,price,quantity} = this.props;
    return (
   
          <tr>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{price}</td>
          </tr>
      
    )
  }
}

export default CheckoutTable
