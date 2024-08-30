import { SlSocialFacebook } from "react-icons/sl";
import { FaTwitter, FaInstagram, FaPinterestP} from "react-icons/fa";
import WishItem from './wishitem';


export default function Wishlist(){
  return(
    <div className='w-full h-full bg-white rounded-md shadow-md grid grid-rows-[1fr_7fr_2fr] '>
      <div className='grid grid-cols-[2fr_1fr_1fr_1fr] border-b border-gray-300 p-4 '>
        <span>PRODUCT</span>
        <span>PRICE</span>
        <span>STOCK STATUS</span>
        <span></span>
      </div>
      <div className=' p-4 overflow-auto'>
        <WishItem />
        <WishItem />
        <WishItem />
        <WishItem />
        <WishItem />
        <WishItem />
        <WishItem />
        
        
      </div>
      <div className='border-t border-gray-300 p-4'>
        <div>
          <span>Share: </span>
          <div className='flex flex-row gap-4'>
            <div className='w-12 h-12 rounded-full hover:bg-green-500 flex flex-row align-center justify-center text-center'> <SlSocialFacebook /> </div>
            <div className='w-12 h-12 rounded-full hover:bg-green-500 flex flex-row align-center justify-center text-center'> <FaTwitter /> </div>
            <div className='w-12 h-12 rounded-full hover:bg-green-500 flex flex-row align-center justify-center text-center'> <FaInstagram /> </div>
            <div className='w-12 h-12 rounded-full hover:bg-green-500 flex flex-row align-center justify-center text-center'> <FaPinterestP/> </div>
          </div>

        </div>
      </div>
  
    </div>
  )
}