import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout.js";
import Divyadesangal from "./pages/Divyadesangal.js";
import Ahzvargal from "./pages/Ahzvargal.js";
import Bhagavatgita from "./pages/Bhagavatgita.js";
import Dasavatharam from "./pages/Dasavatharam.js";
import Home from "./pages/Home.js";
import Stories from "./pages/Stories.js";
import Songs from "./pages/Songs.js";

export default function App() {
    console.log("begin");
    return (
    
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path="Ahzvargal" element={<Ahzvargal />} />
                <Route path="Divyadesangal" element={<Divyadesangal />} />
                <Route path="Bhagavatgita" element={<Bhagavatgita />} />
                <Route path="Dasavatharam" element={<Dasavatharam />} />
                <Route path="Stories" element={<Stories />} />
                <Route path="Songs" element={<Songs />} />
            </Route>
        </Routes>  
      </ BrowserRouter>
    );  
  };
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
