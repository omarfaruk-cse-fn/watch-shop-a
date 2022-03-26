import { faCaretDown, faSquareCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('productsDB.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    //addind cart information in the cart summary
    const [cart, setCart] = useState([])
    const addToCart = (product => {
        if (cart.indexOf(product) === -1) {
            const newCart = [...cart, product]
            setCart(newCart)
        }
        else {
            alert('you can not hire same model 2 times');
        }
    })

    //finding random value 
    const [random, setRandom] = useState([])
    const RandomProduct = (cart) => {
        console.log(cart)

    }
    return (
        <div className='shop-container'>
            <div className='products'>
                {
                    products.map(product => <Product key={product.id}
                        addToCart={addToCart}
                        product={product}></Product>)
                }
            </div>

            <div className='card-container'>
                <h3>Order Summary</h3>
                <div>
                    {
                        cart.map(info =>
                            <div>
                                <p> {info.name}</p>
                            </div>)
                    }
                </div>
                <button onClick={() => RandomProduct(cart.name)}>choose 1 <FontAwesomeIcon icon={faSquareCheck}></FontAwesomeIcon></button>
                <button> clear all <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button>
                <h4></h4>
            </div>
        </div>

    );
};

export default Products;