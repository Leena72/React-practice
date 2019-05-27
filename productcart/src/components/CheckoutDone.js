import React, { Component } from 'react';
class checkoutDone extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleClick = () =>
    {
        this.props.history.push('/');
    }
    render() { 
        return ( 
            <div className="done">
                <h5>Thanks for Shopping</h5>
                <button className="continue" onClick={this.handleClick}>Continue</button>
            </div>
         );
    }
}
 
export default checkoutDone;