import { useParams } from "react-router";
import { useState, useEffect } from "react";
import MenuCard from "./MenuCard";
import Barswigy from "./Barswigy";
import Simer from "./simer";

export default function Resturenetmenu() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const [Selected, setSelected] = useState(null);

  async function fetchData() {
    const proxyserver = 'https://cors-anywhere.herokuapp.com/';
    const swegyData = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.2706&lng=85.8334&restaurantId=${id}`;
    const data = await fetch(proxyserver + swegyData);
    const response = await data.json();
    const tempdata = response?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const filteredData = tempdata.filter((item) => 'title' in item?.card?.card);
    setData(filteredData);
  }

  useEffect(() => {
    fetchData();
  }, []);
  if(data.length==0){
   return <Simer></Simer>
  }

  return (
    <>
   
    <Barswigy></Barswigy>
    <div id="vegbox">
      <button className={`vegbtn ${Selected=='veg'?"bg-green-400  text-white":'bg-gray-300'}`} onClick={()=>setSelected(Selected=='veg'?null:'veg')}>VEG</button>
      <button className={`vegbtn ${Selected=='nonveg'?"bg-red-500 text-white":'bg-gray-300'}`} onClick={()=> setSelected(Selected=='nonveg'?null:'nonveg')}>NONVEG</button>
    </div>
    <div className="menu-container">
      {
        data.map((value) =>
          <MenuCard key={value?.card?.card?.title} resData={value?.card?.card} FoodSelected={Selected}/>
        )
      }
    </div>
    </>
  );
}
