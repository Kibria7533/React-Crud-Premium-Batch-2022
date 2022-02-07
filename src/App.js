import Nasim from "./Nasim";
import Mor from "./Mor";
import Home from "./Component/Home";
import Navber from "./Component/Navber";
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Form from "./Component/Form";
import { useState } from "react";
import EditForm from "./Component/EditForm";
function App() {
const [tt,setTT]=useState([])
const getData=(data)=>{
setTT([...tt,data])
}

const deleteData=(id)=>{
console.log(id);
const filterd=tt.filter((a,b)=>b!=id);
setTT(filterd)
}

const UpdateData=(up,id)=>{
// console.log(up,'lll')
let ans=tt.map((el,ind)=>{
  if(ind==id){
return up;
  }
  else{
return el;
  }
})

setTT(ans)
}


  return (
    <BrowserRouter>
    <Navber/>
      <Routes>
        <Route  path="/" element={<Home data={tt} deleteFn={deleteData}/>} />
        <Route   path="/add" element={<Form fn={getData} />} />
        <Route   path="/edit/:id" element={<EditForm up={UpdateData} data={tt}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
