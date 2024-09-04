import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const [products, setProducts] = useState([]);
    const currency = '$';
    const delivery_fee = 10;
    const [searching, setSearching] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            const productsCollection = collection(db, "products");
            const productsSnapshot = await getDocs(productsCollection);
            const productsList = productsSnapshot.docs.map(doc => {
                const data = doc.data();
                return { id: doc.id, ...data };
            });
            setProducts(productsList);
        };
    
        fetchProducts();
    }, []);

    const addToCart = (itemId) => {
        setCartItems((prevCartItems) => {
            const updatedCart = { ...prevCartItems };
            if (updatedCart[itemId]) {
                updatedCart[itemId] += 1;
            } else {
                updatedCart[itemId] = 1;
            }
            return updatedCart;
        });
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                totalCount += cartItems[itemId];
            }
        }
        return totalCount;
    };

    const updateQuantity = async (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;
        setCartItems(cartData);
    };

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            const itemInfo = products.find((product) => product.id.toString() === itemId);
            if (itemInfo && cartItems[itemId] > 0) {
                totalAmount += itemInfo.price * cartItems[itemId];
            }
        }
        return totalAmount;
    };

    const value = {
        products, currency, delivery_fee,
        searching, setSearching, showSearch, setShowSearch,
        cartItems, addToCart, getCartCount, updateQuantity, getCartAmount, navigate
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
