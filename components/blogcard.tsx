import React from 'react';
import styles from './blogcard.module.css'
import Image from 'next/image';
import nine from '../public/Image-9.png'
import Link from 'next/link';

export default function BlogCard(){
  return(
    
    <div className={styles.card}>
      <div className={styles.image}>
        <Link href={'#'}>
          
          <Image width={424} height={324} src={nine} alt=''/>
        </Link>
      </div>
      <div className={styles.content}>
        <div className={styles.tags}>
          <span>Food</span>
          <span>By Admin</span>
          <span>65 comments</span>
        </div>
        <div className={styles.title}>
          <Link href={'#'}>
            <h3>Lorem ipsum some card title title card</h3>
          </Link>
        </div>
        <span className={styles.read}> <Link href={'#'}> Read More</Link> </span>
      </div>
    </div>
  )
}