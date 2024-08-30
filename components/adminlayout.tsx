import styles from './adminlayout.module.css';
import Logo from './logo';
import Link from 'next/link';

import { SiGooglemessages } from "react-icons/si";
import { IoIosNotifications } from "react-icons/io";


export default function AdminLayout({ children }: { children: React.ReactNode }){
  return(
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles.search}>
            <input type='text' placeholder='search'></input>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.messages}>
          <SiGooglemessages size={30}/>
          </div>
          <div className={styles.notifications}>
            <IoIosNotifications size={30}/>
          </div>
          <div className={styles.user}>
            <div className={styles.userImage}>
            </div>
            <div className={styles.userName}>
              <span>Evans Acheampong</span>
            </div>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.sidebar}>
          
          <nav className={styles.sidebarNav}>
            <div className={styles.navLinks}>
              <Link href='/admin/dashboard'>
              <div className={styles.navLink}> <span>

                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.32873 0.515945C9.3873 0.568007 9.44276 0.623466 9.49482 0.682036L15.4948 7.43204C15.8202 7.79814 16 8.27094 16 8.76076V16.0004C16 17.1049 15.1046 18.0004 14 18.0004H10.002C10.0013 18.0004 10.0007 18.0004 10 18.0004H6C5.99934 18.0004 5.99868 18.0004 5.99803 18.0004H2C0.89543 18.0004 0 17.1049 0 16.0004V8.76076C0 8.27094 0.179757 7.79814 0.505181 7.43204L6.50518 0.682036C7.23902 -0.14353 8.50316 -0.217891 9.32873 0.515945ZM7 16.0004H9V12.0004H7V16.0004ZM11 16.0004V11.0004C11 10.4481 10.5523 10.0004 10 10.0004H6C5.44772 10.0004 5 10.4481 5 11.0004V16.0004H2V8.76076L8 2.01076L14 8.76076V16.0004H11Z" fill="white"/>
                </svg>
              </span>Dashboard</div></Link>
              <Link href='/admin/orders'>
              <div className={styles.navLink}>
                <span>

                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2 8V10H0V8H2ZM15 8C15.5523 8 16 8.44771 16 9C16 9.55229 15.5523 10 15 10H5C4.44772 10 4 9.55229 4 9C4 8.44771 4.44772 8 5 8H15ZM2 4V6H0V4H2ZM15 4C15.5523 4 16 4.44772 16 5C16 5.55228 15.5523 6 15 6H5C4.44772 6 4 5.55228 4 5C4 4.44772 4.44772 4 5 4H15ZM2 0V2H0V0H2ZM15 0C15.5523 0 16 0.447715 16 1C16 1.55228 15.5523 2 15 2H5C4.44772 2 4 1.55228 4 1C4 0.447715 4.44772 0 5 0H15Z" fill="#5A607F"/>
                  </svg>

                </span>
                Orders
                <div className={styles.orderPill}> 16 </div>
              </div></Link>
              <Link href='/admin/products'>
              <div className={styles.navLink}>
                <span>

                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5459 0.570287C9.96414 0.152049 10.5498 -0.0533963 11.1377 0.0119215L19 0L18.9881 7.86232C19.0534 8.45018 18.848 9.03586 18.4297 9.4541L9.45408 18.4297C8.69372 19.1901 7.46093 19.1901 6.70056 18.4297L0.570274 12.2994C-0.190091 11.5391 -0.190091 10.3063 0.570274 9.54592L9.5459 0.570287ZM11 2L1.94704 10.9227L8.07732 17.053L17 8V2H11ZM12 5L14 7L12 9L10 7L12 5Z" fill="white"/>
                    </svg>

                </span>
                Products</div></Link>
              <Link href='/admin/customers'>
              <div className={styles.navLink}>
                <span>
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15 7C17.0871 7 18.9253 8.06562 20.0002 9.68246L19.9993 13H12L11.999 14.952L12.0215 16H0V15C0 11.6863 2.68629 9 6 9C7.37834 9 8.65093 9.46574 9.66616 10.2518C10.662 8.32039 12.6768 7 15 7ZM6 11C4.26204 11 2.78296 12.1084 2.23109 13.6569L2.16936 13.8447L2.126 14H9.873L9.8362 13.8625C9.38265 12.3295 8.0355 11.1846 6.4051 11.0203L6.19987 11.0049L6 11ZM15 9C13.6048 9 12.3764 9.71436 11.6606 10.7973L11.535 11H18.464L18.3707 10.845C17.6927 9.78716 16.5304 9.07078 15.2007 9.00496L15 9ZM6 0C8.20914 0 10 1.79086 10 4C10 6.20914 8.20914 8 6 8C3.79086 8 2 6.20914 2 4C2 1.79086 3.79086 0 6 0ZM15 0C16.6569 0 18 1.34315 18 3C18 4.65685 16.6569 6 15 6C13.3431 6 12 4.65685 12 3C12 1.34315 13.3431 0 15 0ZM6 2C4.89543 2 4 2.89543 4 4C4 5.10457 4.89543 6 6 6C7.10457 6 8 5.10457 8 4C8 2.89543 7.10457 2 6 2ZM15 2C14.7239 2 14 2 14 2C14 2 14 2.72386 14 3C14 3.27614 14 4 14 4C14 4 14.7239 4 15 4C15.2761 4 16 4 16 4C16 4 16 3.27614 16 3C16 2.86441 16 2 16 2C16 2 15.1356 2 15 2Z" fill="white"/>
                  </svg>
                </span>
                Customers</div></Link>
              <Link href='/admin/coupons'>
              <div className={styles.navLink}>
                <span>

                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 15H7.5V16.5H0V15ZM0 10.5H7.5V12H0V10.5ZM16.5 7.5H1.5C1.10218 7.5 0.720644 7.34196 0.43934 7.06066C0.158035 6.77936 0 6.39782 0 6V1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0H16.5C16.8978 0 17.2794 0.158035 17.5607 0.43934C17.842 0.720644 18 1.10218 18 1.5V6C18 6.39782 17.842 6.77936 17.5607 7.06066C17.2794 7.34196 16.8978 7.5 16.5 7.5ZM1.5 1.5V6H16.5V1.5H1.5ZM16.5 18H12C11.6022 18 11.2206 17.842 10.9393 17.5607C10.658 17.2794 10.5 16.8978 10.5 16.5V12C10.5 11.6022 10.658 11.2206 10.9393 10.9393C11.2206 10.658 11.6022 10.5 12 10.5H16.5C16.8978 10.5 17.2794 10.658 17.5607 10.9393C17.842 11.2206 18 11.6022 18 12V16.5C18 16.8978 17.842 17.2794 17.5607 17.5607C17.2794 17.842 16.8978 18 16.5 18ZM12 12V16.5H16.5V12H12Z" fill="white"/>
                  </svg>


                </span>
                Coupons</div></Link>
              <Link href='/admin/blog'>
              <div className={styles.navLink}>
                <span>

                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 15H7.5V16.5H0V15ZM0 10.5H7.5V12H0V10.5ZM16.5 7.5H1.5C1.10218 7.5 0.720644 7.34196 0.43934 7.06066C0.158035 6.77936 0 6.39782 0 6V1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0H16.5C16.8978 0 17.2794 0.158035 17.5607 0.43934C17.842 0.720644 18 1.10218 18 1.5V6C18 6.39782 17.842 6.77936 17.5607 7.06066C17.2794 7.34196 16.8978 7.5 16.5 7.5ZM1.5 1.5V6H16.5V1.5H1.5ZM16.5 18H12C11.6022 18 11.2206 17.842 10.9393 17.5607C10.658 17.2794 10.5 16.8978 10.5 16.5V12C10.5 11.6022 10.658 11.2206 10.9393 10.9393C11.2206 10.658 11.6022 10.5 12 10.5H16.5C16.8978 10.5 17.2794 10.658 17.5607 10.9393C17.842 11.2206 18 11.6022 18 12V16.5C18 16.8978 17.842 17.2794 17.5607 17.5607C17.2794 17.842 16.8978 18 16.5 18ZM12 12V16.5H16.5V12H12Z" fill="white"/>
                  </svg>


                </span>
                Blogs</div></Link>
              
              
            </div>
          </nav>
        </div>
        <div className={styles.content}>
          {children}
        </div>
        
        
      </main>
      
    </>
  )
}