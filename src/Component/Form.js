import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Form = (props) => {
const [text,setText]=useState('');
const navigate=useNavigate();

const sendDatatoApp=()=>{
    props.fn(text)
    navigate('/')
}

  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-12 justify-content-center text-center"></div>
        <input value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text"/>
        <button type="button" onClick={sendDatatoApp} style={{width: '50px'}}>Save</button>
      </div>
    </div>
  );
};

export default Form;
