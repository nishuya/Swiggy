

  export default function MenuCard({ resData ,FoodSelected}) {

    //if veg is selected

    if(FoodSelected=='veg'){
      return(
        <div className="menu-card">
        <h2 className="menu-title">{resData.title}</h2>
        {
          resData?.itemCards?.filter((food) => 'isVeg' in food?.card?.info).map((value2) => (
            <div className="item-card" key={value2?.card?.info?.id}>
              <div className="item-info">
                <h3>{value2?.card?.info?.name}</h3>
                <p>{value2?.card?.info?.description}</p>
                <h4>
                  <i className="fa-solid fa-star star-icon"></i>
                  {value2?.card?.info?.ratings?.aggregatedRating?.rating}
                  <p id="rate">    {"₹" + ("defaultPrice" in value2?.card?.info? value2?.card?.info?.defaultPrice / 100 : value2?.card?.info?.price / 100)}</p>
                </h4>
  
              </div>
              <img className="itimg" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${value2?.card?.info?.imageId}`}/>
              <button id="adbtn">ADD</button>
            </div>
          ))
        }
      </div>
      )
    }
    
    //if non veg is selected
    
    if(FoodSelected=='nonveg'){
      return(
        <div className="menu-card">
        <h2 className="menu-title">{resData.title}</h2>
        {
          resData?.itemCards?.filter((food) => !('isVeg' in food?.card?.info)).map((value2) => (
            <div className="item-card" key={value2?.card?.info?.id}>
              <div className="item-info">
                <h3>{value2?.card?.info?.name}</h3>
                <p>{value2?.card?.info?.description}</p>
                <h4>
                  <i className="fa-solid fa-star star-icon"></i>
                  {value2?.card?.info?.ratings?.aggregatedRating?.rating}
                  <p id="rate">    {"₹" + ("defaultPrice" in value2?.card?.info? value2?.card?.info?.defaultPrice / 100 : value2?.card?.info?.price / 100)}</p>
                </h4>
  
              </div>
              <img className="itimg" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${value2?.card?.info?.imageId}`}/>
              <button id="adbtn">ADD</button>
            </div>
          ))
        }
      </div>
      )
    }
    
  
  
  
  //Default
  
    return (
    <div className="menu-card">
      <h2 className="menu-title">{resData.title}</h2>
      {
        resData?.itemCards?.map((value2) => (
          <div className="item-card" key={value2?.card?.info?.id}>
            <div className="item-info">
              <h3>{value2?.card?.info?.name}</h3>
              <p>{value2?.card?.info?.description}</p>
              <h4>
                <i className="fa-solid fa-star star-icon"></i>
                {value2?.card?.info?.ratings?.aggregatedRating?.rating}
                <p id="rate">    {"₹" + ("defaultPrice" in value2?.card?.info? value2?.card?.info?.defaultPrice / 100 : value2?.card?.info?.price / 100)}</p>
              </h4>

            </div>
            <img className="itimg" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${value2?.card?.info?.imageId}`}/>
            <button id="adbtn">ADD</button>
          </div>
        ))
      }
    </div>
  )
}