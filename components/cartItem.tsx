import React from 'react';
import Image from 'next/image';
import styles from './cartItem.module.css';
import nine from '../public/Image-9.png';
import { RiDeleteBin6Line } from 'react-icons/ri';


export default function CartItem({ productName, price, image }: CartItemProps) {
  const [quantity, setQuantity] = React.useState(1);

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleSubtract = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.product}>
        <Image src={image} alt="item" width={70} height={70} className="rounded-lg"/>
        <div className={styles.productname}>
          {productName}
        </div>
      </div>
      
      <div className={styles.price}>
       GHS {price}
      </div>
      <div className={styles.quantity}>

        <div className="flex w-fit p-2 flex-row gap-2 border border-solid rounded-full">
          <button className="w-6 h-6 flex justify-center align-center rounded-full bg-gray-300 text-black font-semibold" onClick={() => { handleSubtract() }}>-</button>
          <span className="text-center font-semibold text-lg">{quantity}</span>
          <button className="w-6 h-6 flex justify-center align-center rounded-full bg-gray-300 text-black font-semibold" onClick={() => { handleAdd() }}>+</button>
        </div>
      </div>
      <div className={styles.subtotal}>
        GHS {price * quantity}

        <div className="hover:text-rose-500">
          <RiDeleteBin6Line />
        </div>
      </div>
    </div>
  );
};

interface CartItemProps {
  productName: string;
  price: number;
  image: any;
}

CartItem.defaultProps = {
  productName: 'Product Name',
  price: '10.00',
  image: nine,
};