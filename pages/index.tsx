// pages/index.tsx

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Layout from "../components/layout";
import ShopCard from "../components/ui/shopcard";
import Button from "../components/ui/button";
import heroImage from "../public/FreshVegs/Image.png";
import NewsCard from "../components/newscard";
import delivery from "../public/FreshVegs/delivery.png";
import service from "../public/FreshVegs/service.png";
import box from "../public/FreshVegs/box.png";
import bag from "../public/FreshVegs/shopping-bag.png";
import woman from "../public/FreshVegs/woman.png";
import basket from "../public/FreshVegs/basket.png";
import video from "../public/FreshVegs/Video.png";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroImage}>
              <Image alt="freshVegs" src={heroImage} width={0} height={0} />
            </div>
            <div className={styles.heroText}>
              <p className="text-sm text-green-400">WELCOME TO FRESHVEGS</p>
              <h1>Fresh & Healthy Organic Food</h1>
              <p className="text-green-800 font-lg mb-4 text-lg">
                Free shipping on all your orders. we deliver, you enjoy
              </p>
              <Button buttonText="Shop now →" />
            </div>
          </div>
        </section>
        <section className={styles.productSection}>
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Image
                  alt="freshVegs"
                  src={delivery}
                  width={0}
                  height={0}
                  className="mx-auto mt-4"
                />
              </div>
              <h5>Free Shipping</h5>
              <p>Free shipping with discount</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Image
                  alt="freshVegs"
                  src={service}
                  width={0}
                  height={0}
                  className="mx-auto mt-4"
                />
              </div>
              <h5>Great Support</h5>
              <p>Instant access to Contact</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Image
                  alt="freshVegs"
                  src={bag}
                  width={0}
                  height={0}
                  className="mx-auto mt-4"
                />
              </div>
              <h5>100% Secure Payment</h5>
              <p>We ensure your money is safe</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>
                <Image
                  alt="freshVegs"
                  src={box}
                  width={0}
                  height={0}
                  className="mx-auto mt-4"
                />
              </div>
              <h5>Money-Back Guarantee</h5>
              <p>30 days money-back guarantee</p>
            </div>
          </div>
          <h2>Introducing Our Products</h2>
          <div className={styles.navigation}>
            <div className={styles.navItem}>
              <p>All</p>
            </div>
            <div className={styles.navItem}>
              <p>Vegetable</p>
            </div>
            <div className={styles.navItem}>
              <p>Fruit</p>
            </div>
            <div className={styles.navItem}>
              <p>Meat & Fish</p>
            </div>
            <div className={styles.navItem}>
              <p>View All</p>
            </div>
          </div>
          <div className={styles.products}>
            <ShopCard
              productName={"Red Chilli"}
              image={""}
              price={14.99}
              stars={0}
            />
            <ShopCard
              productName={"Red Chilli"}
              image={""}
              price={14.99}
              stars={0}
            />
            <ShopCard
              productName={"Red Chilli"}
              image={""}
              price={14.99}
              stars={0}
            />
            <ShopCard
              productName={"Red Chilli"}
              image={""}
              price={14.99}
              stars={0}
            />
            <ShopCard
              productName={"Red Chilli"}
              image={""}
              price={14.99}
              stars={0}
            />
            <ShopCard
              productName={"Red Chilli"}
              image={""}
              price={14.99}
              stars={0}
            />
            <ShopCard
              productName={"Red Chilli"}
              image={""}
              price={14.99}
              stars={0}
            />
            <ShopCard
              productName={"Red Chilli"}
              image={""}
              price={14.99}
              stars={0}
            />
          </div>
        </section>

        <section className={styles.ads}>
          <div className={styles.adsInner}>
            <div className={styles.ad1}>
              <div className={styles.adText}>
                <h3>100% Fresh Cow Milk</h3>
                <p>
                  Starting at <span>GHC14.99</span>
                </p>
                <a href="#">
                  <button className="bg-white py-2 px-6 rounded-full text-green-500 font-semibold">
                    Shop Now →
                  </button>
                </a>
              </div>
            </div>
            <div className={styles.ad2}>
              <div className={styles.ad2Text}>
                <p>DRINK SALE</p>
                <h3>Water & Soft Drink</h3>
                <a href="#">
                  <button className="bg-white py-2 px-6 rounded-full text-green-500 font-semibold">
                    Shop Now →
                  </button>
                </a>
              </div>
            </div>
            <div className={styles.ad3}>
              <div className={styles.adText}>
                <p>100% ORGANIC</p>
                <h3>Quick Breakfast</h3>
                <a href="#">
                  <button className="bg-white py-2 px-6 rounded-full text-green-500 font-semibold">
                    Shop Now →
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.offer}>
          <div className={styles.offerImageLeft}>
            <Image src={basket} width={0} height={0} className="rounded-md" />
          </div>
          <div className={styles.countdown}>
            <p className="text-sm text-green-500 font-semibold text-center">
              BEST DEALS
            </p>
            <h3 className="text-green-900 text-center">
              Our Special Products Deal of the Month
            </h3>
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className={styles.countdownItem}>
                <span className="text-3xl font-semibold text-green-600">
                  00
                </span>
                <span className="text-sm text-gray-400">DAYS</span>
              </div>
              :
              <div className={styles.countdownItem}>
                <span className="text-3xl font-semibold text-green-600">
                  00
                </span>
                <span className="text-sm text-gray-400">HOURS</span>
              </div>
              :
              <div className={styles.countdownItem}>
                <span className="text-3xl font-semibold text-green-600">
                  00
                </span>
                <span className="text-sm text-gray-400">MINUTES</span>
              </div>
              :
              <div className={styles.countdownItem}>
                <span className="text-3xl font-semibold text-green-600">
                  00
                </span>
                <span className="text-sm text-gray-400">SECONDS</span>
              </div>
            </div>
            <button className="bg-green-500 py-2 px-6 rounded-full text-white text-xl font-semibold">
              {" "}
              Shop Now
            </button>
          </div>
          <div className={styles.offerImageRight}>
            <Image src={woman} width={0} height={0} className="rounded-sm" />
          </div>
        </section>
        <section className={styles.featuredProducts}>
          <h2>Featured Products</h2>
          <div className={styles.products}>
            <ShopCard
              productName={"Red Chilli"}
              image={""}
              price={14.99}
              stars={0}
            />
            <ShopCard
              productName={"Red Chilli"}
              image={""}
              price={14.99}
              stars={0}
            />
            <ShopCard
              productName={"Red Chilli"}
              image={""}
              price={14.99}
              stars={0}
            />
            <ShopCard
              productName={"Red Chilli"}
              image={""}
              price={14.99}
              stars={0}
            />
          </div>
        </section>
        <section className={styles.testimonials}>
          <h2 className="mb-4">What our Clients Say</h2>
          <div className="grid grid-cols-3 gap-4 w-3/4 h-1/2">
            <div className=" grid grid-rows-2 gap-4">
              <div className="bg-white rounded-md"></div>
              <div className=" flex flex-col items-center p-4">
                <div className="bg-blue-100 w-32 h-32 rounded-full"></div>
                <div className="flex flex-col gap-2">
                  <span className="text-lg font-semibold text-green-800">
                    Jenny Wilson
                  </span>
                  <span className="font-light text-md text-green-600 text-center">
                    Customer
                  </span>
                </div>
              </div>
            </div>
            <div className=" grid grid-rows-2 gap-4">
              <div className="bg-white rounded-md"></div>
              <div className=" flex flex-col items-center p-4">
                <div className="bg-blue-100 w-32 h-32 rounded-full"></div>
                <div className="flex flex-col gap-2">
                  <span className="text-lg font-semibold text-green-800">
                    Jenny Wilson
                  </span>
                  <span className="font-light text-md text-green-600 text-center">
                    Customer
                  </span>
                </div>
              </div>
            </div>
            <div className=" grid grid-rows-2 gap-4">
              <div className="bg-white rounded-md"></div>
              <div className=" flex flex-col items-center p-4">
                <div className="bg-blue-100 w-32 h-32 rounded-full"></div>
                <div className="flex flex-col gap-2">
                  <span className="text-lg font-semibold text-green-800">
                    Jenny Wilson
                  </span>
                  <span className="font-light text-md text-green-600 text-center">
                    Customer
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/3 relative top-[100px] h-full  rounded-md"><Image src={video} width={0} height={0} /></div>
          {/* <div className={styles.video}></div> */}
        </section>

        <section className="mt-64">
          <div className={styles.stats}>
            <div className={styles.stat}>
              <h2>20K+</h2>
              <p>Monthly Transactions</p>
            </div>
            <div className={styles.stat}>
              <h2>15K+</h2>
              <p>Farmers reached</p>
            </div>
            <div className={styles.stat}>
              <h2>500+</h2>
              <p>Direct & Indirect jobs created</p>
            </div>
            <div className={styles.stat}>
              <h2>9+</h2>
              <p>Countries of Adoption</p>
            </div>
          </div>
          <div className={styles.news}>
            <h2>Latest News</h2>
            <div className={styles.newsInner}>
              <NewsCard />
              <NewsCard />
              <NewsCard />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
