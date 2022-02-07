import { useState ,useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const EditForm = ({data,up}) => {
const [text,setText]=useState('');
const {id}=useParams();
const navigate=useNavigate();
useEffect(()=>{
let myData=data[id];
setText(myData)

},[])


const upDate=()=>{
    up(text,id);
    navigate('/')
}

  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-12 justify-content-center text-center"></div>
        <input value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text"/>
        <button type="button" onClick={upDate} style={{width: '50px'}}>update</button>
      </div>
    </div>
  );
};

export default EditForm;
