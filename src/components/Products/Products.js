import { faSquareCheck, faTrashCan } from '@fortawesome/free-solid-svg-icons';
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
    const [randomp, setRandom] = useState([])
    const RandomProduct = (cart) => {
        let randomNumber = Math.floor(Math.random() * cart.length)
        console.log(randomNumber)
        setRandom(cart[randomNumber])
    }
    //clear data 
    const [clData, setClData] = useState([])
    const ClearData = (cart) => {
        cart = []
        setClData(cart)
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
                <div className='order-container'>
                    <h3>Order Summary</h3>
                    <div>
                        {
                            cart.map(info =>
                                <div>
                                    <p> {info.name}</p>
                                </div>)
                        }
                    </div>
                    <button onClick={() => RandomProduct(cart)}>choose 1 <FontAwesomeIcon icon={faSquareCheck}></FontAwesomeIcon></button>
                    <button onClick={() => ClearData(cart)}> clear all <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button>
                    <div>
                        <p>{randomp.name}</p>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Products;