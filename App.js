import React from "react";
import ReactDOM from "react-dom/client";
import Restlocal from "./Restlocal";
import Main from "./main";
import { BrowserRouter,Route,Routes } from "react-router";
import Resturenetmenu from "./Resturenetmenu";


function App(){
    return(
        <>
        <BrowserRouter>

        <Routes>
            <Route path="/" element={<Main></Main>}></Route>
            <Route path="/resturent" element={ <Restlocal></Restlocal>}></Route>
            <Route path="/city/bhubaneswar/:id" element={<Resturenetmenu></Resturenetmenu>}></Route>
          
        </Routes>
        </BrowserRouter>

       
        </>
    )
}
const element = ReactDOM.createRoot(document.getElementById('root'));
element.render(<App/>)
