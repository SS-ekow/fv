import aubergine from '../../public/FreshVegs/aubergine.png';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineShoppingBag } from "react-icons/hi2";

interface ShopCardProps {
  productName: string;
  image: string;
  price: number;
  stars: number;
}

export default function ShopCard({ productName = 'Product Name', image = '', price = 14.99, stars = 3 }: ShopCardProps){ 
  return(
    <div className=' w-96 h-116 bg-white border border-gray-300 rounded-md grid grid-rows-[3fr_1fr] gap-4 mb-4 hover:border hover:border-green-500 hover:shadow-lg'>
      <div className='p-2 rounded-t-md'>
        <Image src={aubergine} width={0} height={0} alt='' objectFit="cover" className='rounded-md w-full h-full' />
      </div>
      <div className=' p-4 flex items-center justify-between'>
        <div className='inline-block'>          
          
            <span className='font-light text-green-600 text-lg'>{productName}</span>        
            <h5 className='font-semibold'>GHC {price}</h5>         
            <span className='flex mb-2'>
              <Star/>
              <Star/>
              <Star/>
              
            </span> 
          
        </div>
        <Link href='#'>
          <div>
            <button className='w-14 h-14 rounded-full bg-green-500 text-white text-3xl'><HiOutlineShoppingBag className='mx-auto my-auto'/></button>
          </div>
        </Link>
      </div>
    </div>
  )
}


const Star =()=>{
  return(

    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.31008 12.4111L11.8566 14.6577C12.31 14.9446 12.8725 14.5177 12.7381 13.9884L11.7138 9.95805C11.6848 9.84579 11.6882 9.72764 11.7234 9.61718C11.7586 9.50673 11.8243 9.40846 11.9129 9.33368L15.0933 6.68711C15.5106 6.33949 15.2958 5.64593 14.7586 5.61105L10.6056 5.34105C10.4938 5.33312 10.3866 5.29359 10.2964 5.22707C10.2061 5.16055 10.1367 5.06977 10.096 4.9653L8.5469 1.06493C8.50472 0.954081 8.42984 0.858673 8.33219 0.791355C8.23455 0.724037 8.11875 0.687988 8.00015 0.687988C7.88155 0.687988 7.76575 0.724037 7.6681 0.791355C7.57046 0.858673 7.49558 0.954081 7.4534 1.06493L5.90427 4.9653C5.86372 5.06988 5.79429 5.16077 5.70406 5.2274C5.61383 5.29402 5.50652 5.33364 5.39465 5.34161L1.24171 5.61161C0.705084 5.64593 0.489084 6.33949 0.907022 6.68711L4.0874 9.33424C4.17588 9.40898 4.2415 9.50715 4.27673 9.61749C4.31195 9.72783 4.31534 9.84587 4.28652 9.95805L3.33702 13.6959C3.17558 14.3309 3.85115 14.8434 4.39452 14.4986L7.69077 12.4111C7.78342 12.3522 7.89093 12.3209 8.00071 12.3209C8.11049 12.3209 8.218 12.3522 8.31065 12.4111H8.31008Z" fill="#FF8A00"/>
    </svg>

  )
}