import React from 'react'
import useFetch from '../hooks/useFetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlist';
import { addToCart } from '../redux/slices/cartSlice';


function Home() {
  const data = useFetch('https://fakestoreapi.com/products')
  console.log(data);
  const dispatch = useDispatch()

  return (
    <>
      <div className=' md:grid-cols-4 sm:grid-cols-2 p-5  grid px-16 gap-10 my-10 '>
        {data?.length > 0 ?
          data?.map((item) => (
            <div className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-4 shadow-2xl rounded-md bg-white flex flex-col'>
              <img className='w-full h-50' src={item?.image} alt="" />
              <h1 className='font-bold'>{item?.title}</h1>
              <p className='text-justify'>{item?.description}</p>
              <h1 className='text-primary'>Price : ${item?.price}</h1>
              <div className='flex justify-between  bottom-0 mt-2'>
                <div onClick={()=>dispatch(addToWishlist(item))} className="p-1 px-2 border border-red-700 bg-red-700 text-white rounded-sm hover:bg-white hover:text-red-700"><FontAwesomeIcon icon={faHeart} />
                </div>
                <div onClick={()=>dispatch(addToCart(item))} className="p-1 px-2 border border-green-700 bg-green-700 text-white rounded-sm hover:bg-white hover:text-green-700"><FontAwesomeIcon icon={faCartShopping} />
                </div>
              </div>
            </div>
          ))

          :
          <h1>Nothing to display</h1>
        }
      </div>
    </>
  )
}

export default Home
