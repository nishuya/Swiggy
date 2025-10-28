import React from "react";
import { Link } from "react-router";

import { imageGridCards } from "./ingredent/head1";

export default function Food(){

return(
   
    <div id="box10">
{
    imageGridCards.map((value)=>(
        <div key={value.id}>
          
                   <Link to="/resturent">
            <img id="food" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+value.imageId} ></img>
           </Link>
        </div>
    ))
}
    </div>
   
)
}

