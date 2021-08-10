import Header from '../components/Header';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';
import CheckOutProduct from '../components/CheckOutProduct';
import Currency from 'react-currency-formatter';
import { selectTotal } from '../slices/basketSlice';

const checkout = () => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
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
              {items.map((item, i) => (
                <CheckOutProduct
                  key={i}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  category={item.category}
                  image={item.image}
                  hasPrime={item.hasPrime}
                  index={i}
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
              <button className='button mt-2'>Proceed to ckeckout</button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default checkout;
