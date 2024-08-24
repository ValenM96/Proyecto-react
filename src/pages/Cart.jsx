import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { imageMap } from '../components/ProductItem';
import trash from '../assets/basura.png';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, cartItems, currency, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const itemId in cartItems) {
      if (cartItems.hasOwnProperty(itemId) && cartItems[itemId] > 0) {
        tempData.push({
          _id: itemId,
          quantity: cartItems[itemId]
        });
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>
      <div>
        {cartData.length > 0 ? (
          cartData.map((item, index) => {
            const productData = products.find(product => product._id.toString() === item._id.toString());

            if (!productData) {
              return (
                <div key={index} className='py-4 border-t border-b text-gray-700'>
                  <p>Product not found</p>
                </div>
              );
            }

            const imageSrc = imageMap[productData.image] || '';

            return (
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img className='w-16 sm:w-20' src={imageSrc} alt={productData.name} />
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                    <p className='flex items-center gap-5 mt-2'>{currency}{productData.price}</p>
                  </div>
                </div>
                <input onChange={(e)=> e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id,Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />
                <img onClick={()=>updateQuantity(item._id,0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={trash} alt="trash_icon" />
              </div>
            );
          })
        ) : (
          <p className='text-gray-700'>Your cart is empty</p>
        )}
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal/>
          <div className='w-full text-end'>
            <button onClick={()=>navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
