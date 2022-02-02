import Nasim from "./Nasim";
import Mor from "./Mor";
import Home from "./Component/Home";
import Navber from "./Component/Navber";
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Form from "./Component/Form";
import { useState } from "react";
function App() {
const [data,setData]=useState([]);

const FetchData=(values)=>{
setData([...data,values]);
}

const Delete=(id)=>{
  //[{23},{45},{65}]-->2
  let deletedData=data.filter((eld,indd)=> indd!=id);
  setData(deletedData);
  

}

  return (
    <BrowserRouter>
    <Navber/>
      <Routes>
        <Route  path="/" element={<Home datas={data} DeleteFn={Delete} />} />
        <Route   path="/add" element={<Form fetch={FetchData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
