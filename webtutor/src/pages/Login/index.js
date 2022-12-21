import react from "react"

import './index.css';
import "./ComponentButton"
import Logo from "./logo.PNG";
import { Link } from "react-router-dom";

function Login() {

  return (
    <div>
        <div class="box">
            
            <div class="box-form">
            <img src={Logo} class="logo"></img>
            <form method="GET" id="loginForm">
            <input 
            type="text"
            id ="login"
            placeholder="Login">
            </input>
            <input 
            type="password"
            id ="login"
            placeholder="Password">
            </input>

            <button>Login</button>
            <button><Link to="/Cadastro" class="link">Registrar-se</Link ></button>
      
        </form>

            </div>
        </div>
    </div>
  );
}

export { Login };
