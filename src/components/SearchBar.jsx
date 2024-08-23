import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import search from '../assets/searchIcon.png';
import cruz from '../assets/cruz.logo.png';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const { searching , setSearching , showSearch , setShowSearch} = useContext(ShopContext);
    const [visible,setVisible] = useState(false);
    const location = useLocation();

    useEffect(()=>{
        if (location.pathname.includes('collection')){
            setVisible(true);
        }
        else {
            setVisible(false);
        }
    },[location])

return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
            <input value={searching} onChange={(e)=>setSearching(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search'/>
            <img className='w-4' src={search} alt="search_icon" />
        </div>
        <img onClick={()=>setShowSearch(false)}className='inline w-3 cursor-pointer' src={cruz} alt="cruz_logo" />

    </div>
) : null
}

export default SearchBar