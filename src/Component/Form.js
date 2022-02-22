import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Form = (props) => {
const [title,setTitle]=useState('');
const [author,setAuthor]=useState('');
const [body ,setBody]=useState('');
const navigate=useNavigate();

const sendDatatoApp=async ()=>{

  try{
     let x= await axios.post('http://localhost:4000/api/save',{title,body,author})
     console.log(x,'success')
  }catch(er){
    console.log(er)
  }

    navigate('/')
}

  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-12 justify-content-center text-center"></div>
        <input value={title} onChange={(e)=>setTitle(e.target.value)} style={{margin:"12px"}} placeholder="Enter title"/>
        <input value={author} onChange={(e)=>setAuthor(e.target.value)}  style={{margin:"12px"}} placeholder="Enter author"/>
        <input value={body} onChange={(e)=>setBody(e.target.value)} style={{margin:"12px"}} placeholder="Enter body"/>
        <button type="button" onClick={sendDatatoApp} style={{width: '50px'}}>Save</button>
      </div>
    </div>
  );
};

export default Form;
