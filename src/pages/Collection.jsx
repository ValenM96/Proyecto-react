import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import backB from '../assets/backButton.png';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const {products, searching ,showSearch } = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([])
  const [sortType,setSortType] = useState ('relevant')

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();
    if (showSearch && searching){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(searching.toLowerCase()))
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    if (subCategory.length > 0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy)
  }

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();
    switch (sortType){
      case 'low-high':
      setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
      break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)))
        break;
        default:
          applyFilter();
          break;
    }
  }

  useEffect(()=>{
      setFilterProducts(products)
  },[products])

  useEffect (() => {
    applyFilter();
  },[category, subCategory, searching, showSearch])

  useEffect (() => {
    sortProduct();
  },[sortType])

    return (
      <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
        
        <section className='min-w-60'>
          <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
            FILTERS
            <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={backB} alt="" />
          </p>

          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden' } sm:block`}>
            <p className='mb-3 text-sm font-medium'>BRANDS</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Johnnie Walker'} onChange={toggleCategory} /> Johnnie Walker
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Jack Daniels'} onChange={toggleCategory} /> Jack Daniel's
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Chivas Regal'} onChange={toggleCategory} /> Chivas Regal
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Glenfiddich'} onChange={toggleCategory} /> Glenfiddich
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Macallan'} onChange={toggleCategory} /> Macallan
              </p>
            </div>
          </div>
        
          <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden' } sm:block`}>
            <p className='mb-3 text-sm font-medium'>TYPES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Blended Scotch'} onChange={toggleSubCategory} /> Blended Scotch
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Single Malt Scotch'} onChange={toggleSubCategory} /> Single Malt Scotch
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type="checkbox" value={'Tennessee Whiskey'} onChange={toggleSubCategory} /> Tennessee Whiskey
              </p>
            </div>
          </div>
        </section>
        
        <section className='flex-1'>
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={'ALL'} text2={'COLLECTIONS'} />
            <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
              <option value="relevent">Sort by: Relevent</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>
  
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {filterProducts.map((item, index) => (
              <ProductItem 
                key={index} 
                name={item.name} 
                id={item._id} 
                price={item.price} 
                image={item.image} 
              />
            ))}
          </div>
        </section>
  
      </div>
    );
  }

export default Collection