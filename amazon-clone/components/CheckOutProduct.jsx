import Image from 'next/image';
import React from 'react';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../slices/basketSlice';
const MAX_RATING = 5;
const MIN_RATING = 1;
const CheckOutProduct = ({
  id,
  title,
  price,
  description,
  category,
  image,
  hasPrime,
}) => {
  const [rating] = React.useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const dispatch = useDispatch();
  const removeItemFromBasket = (id) => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className='grid grid-cols-5 border-b border-gray-100 mb-1 p-2 '>
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        objectFit='contain'
      />
      <div className='col-span-3 mx-5'>
        <p>{title}</p>
        <div className='flex items-center'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className='h-5 text-yellow-500' />
            ))}
        </div>
        <p className='text-xs my-2 line-clamp-3'>{description}</p>
        <Currency className='' quantity={price} currency='GBP' />
        {hasPrime && (
          <div className='flex items-center space-x-2 '>
            <img
              loading='lazy'
              className='w-12'
              src='https://links.papareact.com/fdw'
              alt=''
            />
            <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      <div className='flex flex-col space-y-2 my-auto justify-self-end'>
        <button className='button' onClick={() => removeItemFromBasket(id)}>
          remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckOutProduct;
