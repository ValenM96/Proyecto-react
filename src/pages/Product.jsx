import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { imageMap } from '../components/ProductItem';
import starIcon from '../assets/estrella.png';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [productsLoaded, setProductsLoaded] = useState(false);

  useEffect(() => {
    if (products.length > 0) {
      setProductsLoaded(true);
    }
  }, [products]);

  useEffect(() => {
    if (!productsLoaded) return;

    const id = parseInt(productId, 10);

    const foundProduct = products.find((item) => item._id === id);

    if (foundProduct) {
      setProductData(foundProduct);
      setImage(imageMap[foundProduct.image] || '');
    } else {
      setProductData(null);
    }
  }, [productId, productsLoaded]);

  if (!productData) return <div className="opacity-0"></div>;

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex flex-wrap sm:flex-col gap-3 sm:gap-3 sm:w-[20%] w-full overflow-auto">
            {productData.images && productData.images.length > 0 ? (
              productData.images.map((img, index) => (
                <img
                  key={index}
                  src={imageMap[img] || ''}
                  className="w-[30%] sm:w-full cursor-pointer border rounded-lg"
                  alt={`Image ${index + 1}`}
                  onClick={() => setImage(imageMap[img] || '')}
                />
              ))
            ) : (
              <p>No images available</p>
            )}
          </div>
          <div className="flex-1">
            <img className="w-full h-auto border rounded-lg" src={image} alt={productData.name} />
          </div>
        </div>

        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={starIcon}
                alt="Star"
                className={`w-3.5 ${i < (productData.rating || 0) ? 'text-yellow-500' : 'text-gray-400'}`}
              />
            ))}
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
          <p className="my-5 text-gray-500 md:w-4/5">{productData.description}</p>
          <button onClick={()=>addToCart(productData._id)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">ADD TO CART</button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      <section className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolores exercitationem eum explicabo fugiat libero dolor corrupti, ipsa incidunt, quam modi cupiditate repellat, dolorem aliquam! In odio asperiores architecto incidunt!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi consequuntur magnam culpa cum ex ipsam fugiat autem dolores. Eius ut esse expedita ratione id nam beatae nemo consequuntur cumque accusamus!</p>
        </div>
      </section>
      {productData.category && <RelatedProducts category={productData.category} />}
    </div>
  );
};

export default Product;
