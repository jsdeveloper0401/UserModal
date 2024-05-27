import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  
  const [form,setForm] = useState({})
  const navigate = useNavigate()

  const handleChange =(e)=>{
    const {name,value}= e.target
    setForm({...form,[name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const {username,password} = form
    if(username ==="admin" && password === "123"){
      navigate("/cars")
    }else{
      alert("404 => Something went wrong")
    }
    console.log(form);
  };
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-3 mt-5">
            <form id="form" onSubmit={handleSubmit}>
              <div className="card">
                <div className="card-header">
                  <h1 className="text-center">Login</h1>
                </div>
                <div className="card-body">
                  <input onChange={handleChange} type="text" className="form-control my-2" name="username" placeholder="Username"/>
                  <input onChange={handleChange} type="password" className="form-control my-2" name="password" placeholder="Password"/>
                </div>
                <div className="card-footer">
                  <button className="btn btn-info" type="submit" form="form">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
};

export default Login;
