import React from 'react';


function Customerinfo(props){
    const {items} = props;
    const itemKeys = Object.keys(items);
    return(
        <table className="final-customer-table">
            <tr>
                <th>Field</th>
                <th>Value</th>
            </tr>
            {
                itemKeys.map(item=>(
                    <tr>
                        <td>{item}</td>
                        <td>{items[item]}</td>
                    </tr>
                ))
            }
            

        </table>
    )
}
export default Customerinfo;