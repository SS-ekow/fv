import { useState } from "react";
import Layout from "../components/layout";
import styled from "styled-components";

import Dashboard from "../components/dashboard";
import ShoppingCart from "../components/shoppingcart";
import Settings from "../components/settings";
import Wishlist from "../components/wishlist";
import OrderHistory from "../components/orderhistory";
import OrderDetails from "../components/orderdetails";

import { MdDashboard } from "react-icons/md";
import { FiRefreshCcw } from "react-icons/fi";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";

export default function Account() {
  const [activeComponent, setActiveComponent] = useState("Dashboard");

  const changeActiveComponent = (name: string) => {
    setActiveComponent(name);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "Dashboard":
        return <Dashboard />;
      case "Order history":
        return <OrderHistory />;
      case "Wishlist":
        return <Wishlist />;
      case "Shopping Cart":
        return <ShoppingCart />;
      case "Settings":
        return <Settings />;
      case "Log Out":
        return <OrderDetails />;
      default:
        return <Dashboard />;
    }
  };
  return (
    <>
      <Layout>
        <div className="account-banner">
          <h5>
            Account___<span>{activeComponent}</span>
          </h5>
        </div>
        <AccountStyled>
          <div className="account-navigation">
            <h4>Navigation</h4>

            <div className="nav">
              <div
                className="nav-item flex flex-row align-center gap-2"
                onClick={() => {
                  changeActiveComponent("Dashboard");
                }}
              >
                
                <MdDashboard /> Dashboard
              </div>
              <div
                className="nav-item flex flex-row align-center gap-2"
                onClick={() => {
                  changeActiveComponent("Order history");
                }}
              >
                
                <FiRefreshCcw /> Order history
              </div>
              <div
                className="nav-item flex flex-row align-center gap-2"
                onClick={() => {
                  changeActiveComponent("Wishlist");
                }}
              >
                
                <IoIosHeartEmpty /> Wishlist
              </div>
              <div
                className="nav-item flex flex-row align-center gap-2"
                onClick={() => {
                  changeActiveComponent("Shopping Cart");
                }}
              >
                
                <HiOutlineShoppingBag /> Shopping Cart
              </div>
              <div
                className="nav-item flex flex-row align-center gap-2"
                onClick={() => {
                  changeActiveComponent("Settings");
                }}
              >
                
                <CiSettings /> Settings
              </div>
              <div
                className="nav-item flex flex-row align-center gap-2"
                onClick={() => {
                  changeActiveComponent("Log Out")
                }}
              >
                
                <IoIosLogOut /> Log-out
              </div>
            </div>
          </div>
          <div className="account-content">{renderComponent()}</div>
        </AccountStyled>
      </Layout>
    </>
  );
}

const AccountStyled = styled.div`
  width: 100%;
  height: 100%;
  /* background: blue; */
  display: grid;
  grid-template-columns: 20% 80%;
  gap: 1rem;

  .account-navigation {
    background: white;
    height: 50vh;
    border-radius: 16px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    h4 {
      margin: 10px 8px;
    }

    .nav {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .nav-item {
      padding: 8px;
    }
  }

  .nav-item:hover,
  .nav-item:active {
    border-left: 3px solid green;
    width: 100%;
    background: #f5f5f5;
    cursor: pointer;
  }

  .account-content {
    min-height: 110vh;
    height: 100%;
    /* border: 1px solid black; */
  }
`;
