import { useState } from "react";
const Form = (props) => {
const [firstName, setFirstName]=useState('')
const [lastName, setLastName]=useState('');
const [email, setEmail]=useState('');

const saveData = (e) => {
    e.preventDefault();
   props.fetch({firstName,lastName,email});
   setFirstName('');
   setLastName(''); 
   setEmail('');
}

  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-12 justify-content-center text-center"></div>
        <form onSubmit={saveData}>
        <div className="mb-3">
            <label className="form-label">
              First Name
            </label>
            <input
              type="text"
             
              className="form-control"
              placeholder="Enter your First Name"
              value={firstName}
              onChange={(e)=>setFirstName(e.target.value)}

            />
           
          </div>
          <div className="mb-3">
            <label  className="form-label">
             Last Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e)=>setLastName(e.target.value)}
            />
           
          </div>
          <div className="mb-3">
            <label  className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email address"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
           
          </div>

          <div className="row ">
            <div className="col-md-12 justify-content-center text-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
