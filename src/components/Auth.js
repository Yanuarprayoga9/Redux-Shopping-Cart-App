import React, { useState } from "react";
import "./Auth.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth-slice";

const Auth = () => {
  const [id,setId] = useState('')
  const [password,setPassword] = useState('');

  const dispatch = useDispatch();
  const user = useSelector((state)=>state.auth.user)


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('id',id)
    console.log('user id',user.id)
    const same = parseInt(id) === user.id && parseInt(password) === user.password ;
    console.log(same)
    if(same){
      dispatch(authActions.login());
    }
  }
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" onChange={(e)=>{setId(e.target.value)}} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" onChange={(e)=>{setPassword(e.target.value)}}/>
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
