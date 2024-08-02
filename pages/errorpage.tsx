import React from 'react';
import error from '../public/FreshVegs/error.png';
import Image from 'next/image';

import styles from '../styles/Home.module.css'

export default function ErrorPage(){
  return(
    <div className="grid h-screen place-content-center bg-white px-4">
      <Image src={error} width={0} height={0} alt=''/>
      <div className="text-center">
        

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</p>

        <p className="mt-4 text-gray-500">We can't find that page.</p>

        <a
          href="/"
          className="mt-6 inline-block rounded-full bg-green-400 px-5 py-3 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring"
        >
          Go Back Home
        </a>
      </div>
    </div>
  )
  
}