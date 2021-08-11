import Header from '../components/Header';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';
import CheckOutProduct from '../components/CheckOutProduct';
import Currency from 'react-currency-formatter';
import { selectTotal } from '../slices/basketSlice';
// import { loadStripe } from '@stripe/stripe-js';
// import axios from 'axios';
// const stripePromise = loadStripe(
//   'pk_live_51JN7DkIAEL0dkpKFbzGJ5YqMmkK84aTC1FFRyxjp9vvf5ZU2EiB8PnCsyEuvnsNbbHVTBWg60TjKkIhiUnn8qq1n00bS1bKWIb'
// );

const checkout = () => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  //   const createCheckoutSession = async () => {
  //     const stripe = await stripePromise;
  //     const checkoutSession = await axios.post(
  //       '/api/create-checkout-session.js',
  //       {
  //         items,
  //       }
  //     );
  //   };
  return (
    <div className='bg-gray-100'>
      <Header />
      <main className='lg:flex max-w-screen-2xl mx-auto'>
        {/* Left */}
        <div className='flex-grow m-5 shadow-sm'>
          <Image
            src='https://links.papareact.com/ikj'
            width={1020}
            height={250}
            objectFit='contain'
          />
          <div className='flex flex-col p-5 space-y-10 bg-white'>
            <h1 className='text-3xl border-b pb-4'>
              {items.length
                ? 'Shopping Basket'
                : 'Your Shopping Basket is Empty'}
            </h1>
            <div>
              {items.map((item, index) => (
                <CheckOutProduct
                  key={index}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  category={item.category}
                  image={item.image}
                  hasPrime={item.hasPrime}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Right */}
        <div className='flex flex-col bg-white p-10 shadow-md'>
          {items.length > 0 && (
            <>
              <h2 className='whitespace-nowrap'>
                Subtotal ({items.length} items) :{' '}
                <span class='font-bold'>
                  <Currency quantity={total} currency='GBP' />
                </span>
              </h2>
              <button
                role='link'
                // onClick={createCheckoutSession}
                className='button mt-2'
              >
                Proceed to ckeckout
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default checkout;
