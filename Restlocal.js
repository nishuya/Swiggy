import { useEffect,useState } from "react";
import Simer from "./simer";
import { Link } from "react-router";
import Barswigy from "./Barswigy";
import Restlocalpart from "./Restlocalpart";

export default function Restlocal(){
    const[restdata, setrestdata]=useState([]);

    async function fetchData() {
        const proxyserver='https://cors-anywhere.herokuapp.com/';
        const swegyData='https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2488212&lng=85.79146449999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        const data = await fetch(proxyserver + swegyData);

        const response = await data.json();
        setrestdata(response.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }
useEffect(() =>{
    fetchData()
},[])


if(restdata.length==0){
    return <Simer></Simer>
}
return(
    <div >
    <Barswigy></Barswigy>
     <Restlocalpart></Restlocalpart>
     <h1 style={{marginLeft:'10%',fontSize:'30px',marginTop:'60px'}}>Top restaurant chains in Bhubaneswar</h1>
    <div id="box20" >
       {
        restdata.map((value) =>(
           
            <div id="box22" key={value.info.id} style={{ position: 'relative'  }}>
             
            <Link to={"/city/bhubaneswar/"+value.info.id}>    
        <img id="imgh" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${value.info.cloudinaryImageId}`}>

        </img></Link> 
        <div className="gradient"></div>
   
   <h1 id="h22">{value.info.costForTwo}</h1>
    <h1 id="h23">{value.info.name}</h1>        
    <h1 id="rating22"><i  className="fa-solid fa-star der"></i> {value.info.avgRating}<p id="h24">.{value.info.sla.slaString}</p></h1>       
     <p id="p23">{value.info.cuisines[0]}</p>
     <p id="p22">{value.info.areaName}</p>       
            
            
            </div>
        ))
       }
    
    </div>
    </div>
)


}