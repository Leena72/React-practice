import React from 'react'

function OrderTable(props) {
    console.log('props in order table',props);
    const {name,size,color,price} = props.orderitem;

    return (
        <tr>
            <td>{name}</td>
            <td>{size}</td>
            <td>{color}</td>
            <td>{price}</td>
        </tr>
    )
}

export default OrderTable
