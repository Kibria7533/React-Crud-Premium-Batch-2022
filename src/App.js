import Nasim from "./Nasim";
import Mor from "./Mor";
import Home from "./Component/Home";
import Navber from "./Component/Navber";
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Form from "./Component/Form";
import { useState } from "react";
import EditForm from "./Component/EditForm";
function App() {

  return (
    <BrowserRouter>
    <Navber/>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route   path="/add" element={<Form  />} />
        <Route   path="/edit/:id" element={<EditForm/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
