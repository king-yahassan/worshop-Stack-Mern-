import React, { useState } from "react";
import axios from "axios" ;
const AddUser = () =>{
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: ""
      });
    
      const { firstname, lastname, email } = user;
    
      const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/new-user", user);

        window.location = "/" ;
      };
    
    return(
        <>
        <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-2">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="firstname" className="form-label">
                  firstname
                </label>
                <input
                  value={firstname}
                  name="firstname"
                  type="text"
                  className="form-control"
                  id="firstname"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastname" className="form-label">
                  lastname
                </label>
                <input
                  value={lastname}
                  name="lastname"
                  type="text"
                  className="form-control"
                  id="lastname"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  email
                </label>
                <input
                  value={email}
                  name="email"
                  type="email"
                  className="form-control"
                  id="email"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="submit">
                  Add user
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

        
        </>

    )
}
export default AddUser ;