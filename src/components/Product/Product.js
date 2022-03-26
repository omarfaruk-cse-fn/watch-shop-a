import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = (props) => {
    const { addToCart } = props
    const { image, name, price, id } = props.product

    return (
        <div className='product'>
            <img src={image} alt="" />
            <h5>Name : {name}</h5>
            <p>Price : ${price}</p>
            <button onClick={() => addToCart(props.product, id)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;