import React from 'react';
import Button from './ui/button';
import Image from 'next/image';
import eight from '../public/FreshVegs/Image-8.png'
import styles from './blognav.module.css';

export default function BlogNav(){
  return(
    <div className={styles.left}>
       <div className={styles.search}>
         <Button buttonText="Filter" />
         <input type="text" placeholder="Search" />
       </div>
       <div className={styles.categories}>
         <h3>Top Categories</h3>
         <div className={styles.category}>
           <span>Fresh Fruit</span>
           <span>(134)</span>
         </div>
         <div className={styles.category}>
           <span>Fresh Fruit</span>
           <span>(134)</span>
         </div>
         <div className={styles.category}>
           <span>Fresh Fruit</span>
           <span>(134)</span>
         </div>
         <div className={styles.category}>
           <span>Fresh Fruit</span>
           <span>(134)</span>
         </div>
         <div className={styles.category}>
           <span>Fresh Fruit</span>
           <span>(134)</span>
         </div>
         <div className={styles.category}>
           <span>Fresh Fruit</span>
           <span>(134)</span>
         </div>
         <div className={styles.category}>
           <span>Fresh Fruit</span>
           <span>(134)</span>
         </div>
         <div className={styles.category}>
           <span>Fresh Fruit</span>
           <span>(134)</span>
         </div>
       </div>
       <div className={styles.popular}>
         <h3>Popular Tag</h3>
         <div className={styles.tags}>
           <span>healthy</span>
           <span>low fat</span>
           <span>vegetarian</span>
           <span>bread</span>
           <span>vitamins</span>
         </div>
       </div>
       <div className={styles.gallery}>
         <h3>Our Gallery</h3>
         <div className={styles.galleryImages}>
           <Image src={eight} alt ="" width={100} height={100} className={styles.img}/> 
           <Image src={eight} alt ="" width={100} height={100} className={styles.img}/> 
           <Image src={eight} alt ="" width={100} height={100} className={styles.img}/> 
           <Image src={eight} alt ="" width={100} height={100} className={styles.img}/> 
           <Image src={eight} alt ="" width={100} height={100} className={styles.img}/> 
           <Image src={eight} alt ="" width={100} height={100} className={styles.img}/> 
           <Image src={eight} alt ="" width={100} height={100} className={styles.img}/> 
           <Image src={eight} alt ="" width={100} height={100} className={styles.img}/> 
         </div>
       </div>
       <div className={styles.recent}>
         <h3>Recently Added</h3>
         <div className={styles.recentCard}>
           <div className={styles.recentCardImage}>
           </div>
           <div className={styles.recentCardContent}>
             <span>Curabitur porttitor orci etc</span>
             <p>Apr 25, 2021</p>
           </div>
           <div className={styles.recentCardContent}>
             <span>Curabitur porttitor orci etc</span>
             <p>Apr 25, 2021</p>
           </div>
           <div className={styles.recentCardContent}>
             <span>Curabitur porttitor orci etc</span>
             <p>Apr 25, 2021</p>
           </div>
         </div>
       </div>
     </div>
  )
}