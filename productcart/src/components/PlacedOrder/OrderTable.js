import React from 'react';
import OrderRow from './OrderRow';

function OrderTable(props) {
    const { products } = props;


    return (
        <table className="final-order-table">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>

            </tr>
            {
                products.map(item => (
                    <OrderRow item={item} />
                ))
            }
        </table>
    )
}

export default OrderTable;