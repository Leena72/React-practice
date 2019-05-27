import React, { Component } from 'react'
import { connect } from 'react-redux';

export class CartHover extends Component {

goToCart = (e) => {
e.preventDefault();
this.props.history.push('/cart');
console.log("carthover props",this.props);
}


render() {
const {addedItems} = this.props;
console.log('printing added items',addedItems);
return (
<div className="carthover">
   { /*<h5>Your Cart</h5>*/}
    <table>
        <tr>
        <th>NAME</th>
        <th>SIZE</th>
        <th>COLOR</th>
        </tr>
        {

            addedItems.map(item => {
            return(
            <tr>
            <td>{item.name}</td>
            <td>{item.size}</td>
            <td>{item.color}</td>
            </tr>
            )
            })
        }
    </table>
</div>
)
}
}

const mapStateToProps = (state) => {
return {
addedItems: state.addToCart.addedItems
}
}
export default connect(mapStateToProps,null)(CartHover);