import { BrowserRouter as Router, Routes, Route } from "react-router-dom";//previamente haciendo la instalacion 
import { LandingPages } from "../pages/LandingPages";

export function MyRoutes (){
  return(
    <Router>
        <Routes>
            <Route exact path="/" element={<LandingPages/>} />
        </Routes>
    </Router>
  );
}