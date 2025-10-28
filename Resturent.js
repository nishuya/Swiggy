import React from "react";
import ReactDOM from "react-dom/client";
import { dineoutRestaurants } from "./ingredent/ResturentDetails";


export default function Resturent(){
   
     return(
      <div style={{position:"relative"}}>
     <h1 id="reshe">Discover best restaurants on Dineout</h1>
      
      <div id="rest" >
     
        {
            dineoutRestaurants.map((value)=>(
             
                <div key={value.info.id}  style={{
                  position: 'relative',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05), 0 6px 20px rgba(0, 0, 0, 0.08)',
                  borderRadius: '16px',
                  backgroundColor: 'white',
               
                }}>
                
                <img id="ros" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${value.info.mediaFiles[0].url}`}>
                </img>
                <div className="gradient-overlay"></div>
                <div id="restdetails">
          <h1 id="name">{value.info.name}</h1>
          <h1 id="rating"><i  className="fa-solid fa-star der"></i> {value.info.rating.value}</h1>
         <div id="p1"> <p >{value.info.cuisines[0]}</p>
          <p >{value.info.locationInfo.formattedAddress}</p></div>
       <div id="p2">   <p >{value.info.costForTwo}</p>
          <p >{value.info.locationInfo.distanceString}</p></div>
          <div id="off"><h2>{value.info.vendorOffer.info.description} {value.info.vendorOffer.info.subtitle}</h2></div>
          <h2 id="pk">{value.info.offerInfoV3.couponOffer.title}</h2>
          </div>
         
                    </div>
            ))
        }
      </div>
      </div>
     )

}
