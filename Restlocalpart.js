import { useState,useEffect } from "react";


export default function Restlocalpart(){
     const[restdata, setrestdata]=useState([]);
    
        async function fetchData() {
            const proxyserver='https://cors-anywhere.herokuapp.com/';
            const swegyData='https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2488212&lng=85.79146449999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
            const data = await fetch(proxyserver + swegyData);

            const response = await data.json();
            setrestdata(response.data.cards[0].card.card.imageGridCards.info);
        }
    useEffect(() =>{
        fetchData()
    },[])

    return(
        <div style={{marginTop:"60px"}}>
       <h1 style={{marginLeft:'10%',fontSize:'30px'}}>What's on your mind?</h1>
       <div style={{  display: 'flex',
    overflow: 'hidden',      
   width:'1200px',   
    gap: '40px',
    marginLeft: '12%',
    padding: '20px 0',
    overflowX: 'scroll',
    
  }} >
      {
        restdata.map((value)=>(
           
            <div key={value.id}>
               
                <img style={{minHeight:'180px' ,minWidth:'140px'}}
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${value.imageId}`}></img>
            </div>
           
        ))
      }</div> 
        </div>
    )
}