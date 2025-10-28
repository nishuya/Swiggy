import React from "react";
import { Link } from "react-router";

 export default function Header() {
  return (
    <>
      <header>
        {/* top part */}
        <div id="box1">
          <div id="box2">
            <Link to="/resturent">
            <img
              id="img1"
              src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
              alt="Swiggy Logo"
            /></Link>
            <div id="box3">
            <Link to="/resturent">
                Swiggy corporate
                </Link>
              <Link to="/resturent">
                Panther with Us
                </Link>
              <button id="btn1">Get the App</button>
              <button id="btn2">Sign in</button>
            </div>
          </div>
        </div>

        {/* 2nd part */}
        <div id="box4">
          <div id="box5">
            Order food & groceries. Discover <br /> best restaurants. Swiggy it!
          </div>

          <div id="box6">
            <i id="io" className="fa-solid fa-location-dot"></i>
            <input id="inp" type="text" placeholder="Enter your delivery location" />
            <input id="inp2" type="text" placeholder="Enter your delivery location" />
            <i id="io2" className="fa-solid fa-magnifying-glass"></i>
          </div>

          <img
            id="mo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
            alt="Veggies"
          />
          <img
            id="mo2"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
            alt="Sushi"
          />
        </div>

        <div id="box7">
          <div id="box8">
          <Link to="/resturent">
              <img
                className="img1"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png"
                alt="Genie"
              />
            </Link>
           <Link to="/resturent">
              <img
                className="img1"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png"
                alt="Food"
              />
           </Link>
           <Link to="/resturent">
              <img
                className="img1"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png"
                alt="DO"
              />
             </Link>
            <Link to="/resturent">
              <img
                className="img1"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png"
                alt="IM"
              />
           </Link>
          </div>
        </div>
      </header>
    </>
  );
}

