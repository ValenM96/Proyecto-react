import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { imageMap } from '../components/ProductItem';

const Orders = () => {
  const { cartItems, products, currency } = useContext(ShopContext);

  const getCurrentDate = () => {
    const today = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return today.toLocaleDateString(undefined, options);
  };

  const cartData = Object.keys(cartItems).map(itemId => {
    const product = products.find(product => product.id === itemId);
    return product ? {
      ...product,
      quantity: cartItems[itemId],
    } : null;
  }).filter(item => item !== null);

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>
      <div>
        {cartData.length > 0 ? (
          cartData.map((item, index) => (
            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
              <div className='flex items-start gap-6 text-sm'>
                <img
                  className='w-16 sm:w-20'
                  src={imageMap[item.image]}
                  alt={item.name}
                />
                <div>
                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                    <p className='text-lg'>{currency}{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                  <p>Date: <span className='text-gray-400'>{getCurrentDate()}</span></p>
                </div>
              </div>
              <div className='md:w-1/2 flex justify-between'>
                <div className='flex items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm md:text-base'>Ready to ship</p>
                </div>
                <button className='border px-4 py-2 text-sm font-medium rounded'>Track Order</button>
              </div>
            </div>
          ))
        ) : (
          <p className='text-gray-700'>No orders to display</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
