import React from "react";
import styles from "./shoppingcart.module.css";
import Image from "next/image";
import nine from "../public/Image-9.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from "./ui/button";
import CartItem from "./cartItem";

export default function ShoppingCart() {
  return (
    <div className={styles.cart}>
      <div className={styles.cartContainer}>
        <div className={styles.cartItems}>
          <div className={styles.header}>
            <span>PRODUCT</span>
            <span>PRICE</span>
            <span>QUANTITY</span>
            <span>SUBTOTAL</span>
          </div>
          <div className={styles.body}>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
        </div>
        <div className={styles.coupon}>
          <h3>Coupon Code</h3>
          <div className="flex flex-row">
            <input className={styles.input} type="text" placeholder="Enter Code" />
            <button className="p-4 rounded-full bg-black text-white font-semibold">Apply Coupon</button>
          </div>
        </div>
      </div>
      <div className={styles.cartTotal}>
        <h3>Card Total</h3>
        <div className={styles.total}>
          <span>Subtotal: </span>
          <span>GHS130.00</span>
        </div>
        <div className={styles.total}>
          <span>Shipping: </span>
          <span>Free</span>
        </div>
        <div className={styles.total}>
          <span>Total: </span>
          <span>GHS130.00</span>
        </div>
        <button className="mt-8 w-full px-4 py-2 bg-green-400 rounded-full hover:bg-green-600 text-white">Proceed to checkout</button>
      </div>
    </div>
  );
}


