import React, { useEffect, useState } from 'react';

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('productsDB.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div>
            <h1> hi dear !!!</h1>
        </div>
    );
};

export default Products;