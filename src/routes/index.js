import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeMovie from "../views/HomeMovie";
import DatailMovie from "../views/DatailMovie";
import ResultSearchMovie from "../views/ResultSearchMovie";

const RoutesComponent = () =>([
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomeMovie></HomeMovie>}/>
        <Route path="/detail/:id" element={<DatailMovie></DatailMovie>}/>
        <Route path="/result/:title" element={<ResultSearchMovie></ResultSearchMovie>}/>
    </Routes>
    </BrowserRouter>
  ]);

  export default RoutesComponent;