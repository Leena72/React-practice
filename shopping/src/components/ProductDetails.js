import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import { addProduct, updatesize } from '../Action';

import BreadCrumbPD from './BreadCrumbPD';
import Footer from './Footer';

class ProductDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sizeName: "Small",
            quantity: 1,
        }
    }
    handleClick = (e) => {
        let { addProduct } = this.props;
        let { name, price, defaultcolor, image,id } = this.props.product;
        e.preventDefault();
        addProduct({
            color: defaultcolor,
            productName: name,
            price: price,
            size: this.state.sizeName,
            quantity: this.state.quantity,
            id: id,
            image: image
        });
    }

    handleSizeChange = (e) =>{
        this.setState({
            sizeName : e.target.value,
          })
    }

    render() {
        const { name, defaultcolor, price,id } = this.props.product;
        const findProductInCart = this.props.cart.find(item=>item.id === id );
        let quantity = 0;
        if(findProductInCart){
               quantity=findProductInCart.quantity;
        }
        
        return (
            <>
                <BreadCrumbPD />
                <div className="cart-page">
                    <div className="description">
                        <div className="image-desc">
                            {defaultcolor === "Yellow" ?
                                <img className="imageYrb" src="https://s3.amazonaws.com/it-academy-photos-bucket/img3.jpg" alt="yellow" className="image-border" />
                                : null
                            }
                            {defaultcolor === "Blue" ?
                                <img src={"https://s3.amazonaws.com/it-academy-photos-bucket/img1.jpg"} alt="blue" className="image-border" />
                                : null
                            }
                            {defaultcolor === "Red" ?
                                <img src={"https://s3.amazonaws.com/it-academy-photos-bucket/img2.jpg"} alt="red" className="image-border" />
                                : null
                            }
                           
                        </div>

                        <div className="prod-desc">
                            <h2>{name} </h2>
                            <p className="price-desc">₹{price}</p>
                          
                            <p className="description-prod">
                            It has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean
                        </p>
                            <p className="prod-size">Select Size</p>
                            <select name="Size" onClick={(e)=>this.handleSizeChange(e)} className="selectTableSize">
                                <option value="Small">Small</option>
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                            </select>

                            <div className="btn-prod-container">
                    <button disabled = {quantity >= 10} className="btn btn-danger btn-prod" onClick={this.handleClick}>ADD TO CART </button>
                </div>
                        </div>
                        <Navbar/>
                    </div>
                    <Footer/>
                </div>
            </>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const intId = parseInt(id);
    const product = state.productReducer.detailProduct.find(item => item.id === intId);
    return {
        product,
        cart: state.shoppingCartReducer,
        total: state.totalReducer.total,
        products: state.productReducer.storeProducts,
        images: state.productReducer.images,
    }
}

const mapDispatchToProps = (dispatch) => ({
    addProduct: (data) => dispatch(addProduct(data)),
    updatesize: (data) => dispatch(updatesize(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);