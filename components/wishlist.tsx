import React from 'react'
import styles from './wishlist.module.css'
import { SlSocialFacebook } from "react-icons/sl";
import { FaTwitter, FaInstagram, FaPinterestP} from "react-icons/fa";
import WishItem from './wishitem';


export default function Wishlist(){
  return(
    <div className={styles.wishlist}>
      <div className={styles.header}>
        <span>PRODUCT</span>
        <span>PRICE</span>
        <span>STOCK STATUS</span>
        <span></span>
      </div>
      <div className={styles.body}>
        <WishItem />
        <WishItem />
        <WishItem />
        <WishItem />
        <WishItem />
        <WishItem />
        <WishItem />
        
        
      </div>
      <div className={styles.footer}>
        <div className={styles.share}>
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