import React from 'react';

const Product = (props) => {
    const { image, name, price } = props.product
    return (
        <div className='product'>
            <img src={image} alt="" />
            <h5>Name : {name}</h5>
            <p>Price : ${price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;