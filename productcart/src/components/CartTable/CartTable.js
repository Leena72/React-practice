import React, { Component } from 'react';
import {connect } from 'react-redux';
import {addQuantity, subQuantity, deleteItem, addSize, addColor} from '../../Action/actions';


export class CartTable extends Component {


 
  render() {
    const {id,img, name,price,quantity,addQuantity,subQuantity,deleteItem,addSize,addColor,size,color,updateCart}=this.props;
    return (
            <tr>
            <td><img src={img} className="itemImg" alt={name}></img></td>
              <td>{name}</td>
              <td>{
                updateCart ? <select onChange = {(event)=>addSize({id,size:event.target.value})} >
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select> : size
              }
                 
            

              </td>
              <td>
                {updateCart ? <select onClick = {(event)=>addColor({id,color:event.target.value})} >
                  <option value="Blue">Blue</option>
                  <option value="Red">Red</option>
                  <option value="Yellow">Yellow</option>
              </select> : color
            }
              </td>


              <td className="qty">
                {
                  updateCart ?
                  <i onClick={()=>subQuantity({id,price})} 
                    className="icon fas fa-minus-circle" >
                  </i> : null}
              {quantity}
              {updateCart? <i onClick = {()=>addQuantity({id,price})} className="icon fas fa-plus-circle"></i> :null}
              </td> 
              <td>{price*quantity}</td>
              {
                updateCart?
              <td><button onClick={()=>deleteItem({id,price})} className="delete-icon"><i className="fas fa-times"></i></button></td>
              :null} 
            </tr>
         
    )
  }
}
const mapDispatchToProps = {
addQuantity,
subQuantity,
deleteItem,
addSize,
addColor
}
export default connect(null,mapDispatchToProps)(CartTable)
