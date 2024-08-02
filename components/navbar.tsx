
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import Logo from "./logo";
import { RxHamburgerMenu } from "react-icons/rx";
import { SlLocationPin } from "react-icons/sl";
import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.small}>
        <div>
          <p className="flex items-center gap-1"><span ><SlLocationPin/></span> <span>Store Location: Accra, Ghana</span></p>
        </div>
        <div>
          <span className="flex items-center">Eng <button className="h-full p-2 text-white ">
              <span className="sr-only">Menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </span>
          <span className="flex items-center">GHS <button className="h-full p-2 text-white ">
            <span className="sr-only">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button></span>
          <span>
            {" "}
            <Link href="/signup">Sign In / Sign Up</Link>{" "}
          </span>
        </div>
      </div>

      <div className={styles.big}>
        <div className={styles.logo}>
          <Logo />
        </div>

        <div className={styles.navLinks}>
          <div className={styles.categories}>
            
            <Categories />
            
          </div>
          {/* <Link href={'/shop2'}><div>Store</div></Link> */}
          
          <Link href={'/bloglist'}><div>Blog</div></Link>
          <Link href={'/about'}><div>About Us</div></Link>
          <Link href={'/contact'}><div>Contact Us</div></Link>
        </div>
        <div className={styles.search}>
          <input type="text" placeholder="Search" className="h-10 p-2 rounded-md" />
        </div>
        <div className={styles.contact}>
          <span className="flex items-center gap-1"> <LuPhoneCall/> (219)555-0114</span>
        </div>
        <Link href={'/account'}><div className={styles.profileIcon}></div></Link>
        <Link href={''}><div className={styles.cart}>
          <div className={styles.cartIcon}></div>
          <div className={styles.content}>
            <HiOutlineShoppingBag className="text-3xl"/>
            <div>
            <p>Shopping Cart</p>
            <span>GHS 57.00</span>
            </div>
          </div>
        </div></Link>
      </div>
    </header>
  );
};

export default Navbar;

const Categories =()=> {
  const [isOpen, setIsOpen] = React.useState(false);
  return(
    <div className="relative">
      <div className="flex items-center overflow-hidden" onClick={() => setIsOpen(!isOpen)}>
        <a
          href="#"
          className=" px-4 py-2 text-sm/none text-white "
        >
          <div className="flex text-lg items-center gap-2"><span><RxHamburgerMenu/> </span>All Categories</div>
        </a>

        <button className="h-full p-2 text-white ">
          <span className="sr-only">Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute end-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
          role="menu"
        >
          <div className="p-2">
            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-green-300 hover:text-gray-700"
              role="menuitem"
            >
              Root Vegetables
            </a>

            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-green-300 hover:text-gray-700"
              role="menuitem"
            >
              Fruit Vegetables
            </a>

            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-green-300 hover:text-gray-700"
              role="menuitem"
            >
              Stems
            </a>

            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-green-300 hover:text-gray-700"
              role="menuitem"
            >
              Leafy Vegetables
            </a>
          </div>

          
        </div>
      )}
    </div>
  )
}