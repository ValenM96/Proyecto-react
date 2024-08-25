import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

import blackLabel from '../assets/blackLabel.webp';
import jackDaniels from '../assets/jackDaniels.webp';
import macallanRare from '../assets/macallanRare.webp';
import glenfiddich18 from '../assets/glenfiddich.18.webp';
import vat01 from '../assets/vat.01.webp';
import blueLabel from '../assets/blueLabel.webp';
import jackSingle from '../assets/jackSingle.webp';
import macallanDouble from '../assets/18.1.webp';
import vat02 from '../assets/vat.02.webp';
import goldLabel from '../assets/goldLabel.webp';
import jackHoney from '../assets/jackHoney.webp';
import macallanRareCask from '../assets/macallanRare.webp';
import glenfiddich21 from '../assets/21años.webp';
import chivas15 from '../assets/15años.webp';
import redLabel from '../assets/redLabel.webp';
import gentlemanJack from '../assets/Gentleman.webp';
import macallanFineOak from '../assets/12.3.webp';
import fireAndCane from '../assets/12años.webp';
import chivasUltis from '../assets/12años.webp';
import greenLabel from '../assets/greenLabel.webp';
import jackApple from '../assets/jackApple.webp';
import macallanEdition from '../assets/12.2.webp';
import ipaExperiment from '../assets/15años.webp';
import mizunara from '../assets/12años.webp';
import swing from '../assets/dobleBlack.webp';

const imageMap = {
    "./blackLabel.webp": blackLabel,
    "./jackDaniels.webp": jackDaniels,
    "./macallanRare.webp": macallanRare,
    "./glenfiddich.18.webp": glenfiddich18,
    "./vat.01.webp": vat01,
    "./blueLabel.webp": blueLabel,
    "./jackSingle.webp": jackSingle,
    "./18.1.webp": macallanDouble,
    "./vat.02.webp": vat02,
    "./goldLabel.webp": goldLabel,
    "./jackHoney.webp": jackHoney,
    "./macallanRare.webp": macallanRareCask,
    "./21años.webp": glenfiddich21,
    "./15años.webp": chivas15,
    "./redLabel.webp": redLabel,
    "./Gentleman.webp": gentlemanJack,
    "./12.3.webp": macallanFineOak,
    "./12años.webp": fireAndCane,
    "./12años.webp": chivasUltis,
    "./greenLabel.webp": greenLabel,
    "./jackApple.webp": jackApple,
    "./12.2.webp": macallanEdition,
    "./15años.webp": ipaExperiment,
    "./12años.webp": mizunara,
    "./dobleBlack.webp": swing
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
