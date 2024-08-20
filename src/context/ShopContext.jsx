import React, { createContext, useState, useEffect } from 'react';
import productsData from '../assets/products.json';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(productsData);
    }, []);

    const currency = '$'
    const delivery_fee = 10;

    const value = {
        products, currency, delivery_fee
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;