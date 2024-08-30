// components/footer.tsx


import styles from "./footer.module.css";
import Image from "next/image";
import left from "../public/FreshVegs/left.png"
import right from "../public/FreshVegs/right.png"
import trans from "../public/FreshVegs/trans-logo.png"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
       <div className={styles.sub}>
         <div className={styles.top}></div>
         <div className={styles.bottom}>
           <Image src={trans} width={0} height={0} alt=""/>
           <div className="flex flex-col gap-2 text-blue-600">
             <h3>Subscribe to our NewsLetter</h3>
             <p>Pellentesque eu nibh eget mauris congue mattis matti.</p>
           </div>
           <div>
             <input type="text" placeholder="Your email address" className={styles.input}/>
             <button className="px-4 py-4 text-white bg-green-500 rounded-full text-xl">Subscribe</button>
           </div>
         </div>
       </div>
       <div className={styles.main}>
         <div className={styles.left}>
           <Image src={left} alt="" width={0} height={0}/>
         </div>
         <div className={styles.middle}>
           <div className={styles.midTop}>
             
             <div className="flex gap-4 text-white">
               <div className="flex flex-col">
                 <h3 className="font-semibold">Avout FreshVegs</h3>
                 <p>Freshvegs is a Ghanaian agriculture start-up that offers an online marketplace for consumers to shop fresh and quality vegetables and have it delivered at their doorstep and any location of preference within the shortest possible time. </p>
                 <div>
                   <span className="border-b border-green-400 pb-4-2">(219) 555-0114</span> or 
                   <span className="border-b border-green-400 pb-4-2"> Proxy@gmail.com</span>
                   
                 </div>
               </div>
               <div className="flex flex-col">
                 <h3>My Account</h3>
                 <Link href={''}>My Account</Link>
                 <Link href={''}>Order History</Link>
                 <Link href={''}>Shopping cart</Link>
                 <Link href={''}>Wishlist</Link>
                 <Link href={''}>Settings</Link>
               </div>
               <div className="flex flex-col">
                 <h3>Helps</h3>
                  <Link href={''}>Contact</Link>
                  <Link href={''}>Faqs</Link>
                  <Link href={''}>Terms & Conditions</Link>
                  <Link href={''}>Privacy Policy</Link>
               </div>
               <div className="flex flex-col">
                 <h3>Proxy</h3>
                 <Link href={''}>About</Link>
                 <Link href={''}>Shop</Link>
                 <Link href={''}>Product</Link>
                 <Link href={''}>Products Details</Link>
                 <Link href={''}>TrackOrder</Link>
               </div>
               <div className="flex flex-col">
                 <h3>Instagram</h3>
                 <div className="flex gap-4"></div>
               </div>
             </div>
           </div>
           <div className={styles.midBottom}>
             <div className="flex flex-row gap-4">
               <FaFacebook />
               <FaTwitter />
               <FaInstagram />
             </div>
             <span>FreshVegs @2021. All Rights Reserved</span>
             <div className="flex gap-4">
             </div>
           </div>
         </div>
         <div className={styles.right}>
            <Image src={right} alt="" width={0} height={0}/> 
  
         </div>
       </div>
    
    </div>
  );
};

export default Footer;