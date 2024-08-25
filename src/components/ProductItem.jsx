import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';


import blackLabel from '../assets/blackLabel.webp';
import jackDaniels from '../assets/jackDaniels.webp';
import macallanSherryOak from '../assets/12.3.webp';
import glenfiddichSoleraReserve from '../assets/15años.webp';
import chivas12 from '../assets/Chivas12años.webp';
import blueLabel from '../assets/blueLabel.webp';
import jackSingle from '../assets/jackSingle.webp';
import macallanDoubleCask from '../assets/18.1.webp';
import glenfiddich18 from '../assets/glenfiddich.18.webp';
import chivasExtra from '../assets/ChivasExtra.webp';
import goldLabel from '../assets/goldLabel.webp';
import jackHoney from '../assets/jackHoney.webp';
import macallanRareCask from '../assets/macallanRare.webp';
import glenfiddich21 from '../assets/21años.webp';
import chivas18 from '../assets/chivasRegal18.webp';
import redLabel from '../assets/redLabel.webp';
import gentlemanJack from '../assets/Gentleman.webp';
import macallanFineOak from '../assets/macallanFine.webp';
import glenfiddichFire from '../assets/glenfiddichFire.webp';
import chivasUltis from '../assets/chivasRegalUltis.webp';
import greenLabel from '../assets/greenLabel.webp';
import jackSinatra from '../assets/jackDanielsSinatra.webp';
import macallanEdition6 from '../assets/macallanEdition6.webp';
import glenfiddichIpa from '../assets/glenfiddichIpa.webp';
import chivasMizunara from '../assets/chivasRegalMizura.webp';
import swing from '../assets/Swing.webp';


const imageMap = {
"./blackLabel.webp": blackLabel,
"./jackDaniels.webp": jackDaniels,
"./12.3.webp": macallanSherryOak,
"./15años.webp": glenfiddichSoleraReserve,
"./Chivas12años.webp": chivas12,
"./blueLabel.webp": blueLabel,
"./jackSingle.webp": jackSingle,
"./18.1.webp": macallanDoubleCask,
"./glenfiddich.18.webp": glenfiddich18,
"./ChivasExtra.webp": chivasExtra,
"./goldLabel.webp": goldLabel,
"./jackHoney.webp": jackHoney,
"./macallanRare.webp": macallanRareCask,
"./21años.webp": glenfiddich21,
"./chivasRegal18.webp": chivas18,
"./redLabel.webp": redLabel,
"./Gentleman.webp": gentlemanJack,
"./macallanFine.webp": macallanFineOak,
"./glenfiddichFire.webp": glenfiddichFire,
"./chivasRegalUltis.webp": chivasUltis,
"./greenLabel.webp": greenLabel,
"./jackDanielsSinatra.webp": jackSinatra,
"./macallanEdition6.webp": macallanEdition6,
"./glenfiddichIpa.webp": glenfiddichIpa,
"./chivasRegalMizura.webp": chivasMizunara,
"./Swing.webp": swing
};

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);
    const imgSrc = imageMap[image] || blackLabel;

    return (
        <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
            <div className='w-full h-80 bg-white overflow-hidden flex items-center justify-center'>
                <img
                    className='w-full h-full object-contain transition-transform duration-300 ease-in-out hover:scale-110'
                    src={imgSrc}
                    alt={name}
                />
            </div>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>{currency}{price}</p>
        </Link>
    );
};

export default ProductItem;
export { imageMap };
