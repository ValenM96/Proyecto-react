import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase';
import { imageMap } from '../components/ProductItem';
import starIcon from '../assets/estrella.png';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchProductData = async () => {
      const docRef = doc(db, "products", productId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const product = docSnap.data();
        setProductData(product);
        setImage(imageMap[product.image] || '');
      } else {
        setProductData(null);
      }
    };

    fetchProductData();
  }, [productId]);

  if (!productData) return <div className="opacity-0"></div>;

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 flex-col sm:flex-row">
        <div className="flex-1">
          <div className="w-3/4 border rounded-lg flex items-center justify-center bg-white">
            <img className="max-w-full max-h-full object-contain" src={image} alt={productData.name} />
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
          <button onClick={() => addToCart(productData.id)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">ADD TO CART</button>
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolores exercitationem numquam blanditiis distinctio, facilis itaque.</p>
          <p>Quisquam deserunt, repellat itaque cumque tempore praesentium, quae amet, voluptatum doloribus esse mollitia pariatur excepturi dolorum.</p>
        </div>
      </section>

      <RelatedProducts />
    </div>
  );
};

export default Product;
