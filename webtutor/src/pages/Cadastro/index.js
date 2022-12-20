import react from "react"
import Logo from "./logo.PNG";
import './index.css';

function Cadastro() {

  var optionAluno=document.getElementById("aluno");
  var optionProfessor=document.getElementById("professor");
  var typeOfData=document.getElementById("documentOf");

 
  

  return (

    <div>
      <div class="box">
        <div class="box-form">     
        <form action="" method="">
        <h2>Cadastro de Usúario</h2>
        <input type="text" id="nome" placeholder="Nome"></input>
        <input  type="text" id="email" placeholder="E-mail"></input>
        <input  type="password" id="senha" placeholder="Senha"></input>
        <input type="text" id="wpp" placeholder="Whatsapp"></input>
        <input  type="text" id="formacao" placeholder="Formação"></input>
        <h5>Voce e?</h5>
        <div>
        <select name="Tipo de usuario" required>
        <option value="Aluno" id="aluno">Aluno</option>
        <option value="professor" id="professor" >Professor</option>
        </select>    
        
        </div>
        <input type="text" id="documentOf"/>
        
        <button type="submit">Registrar-se</button><br></br>
        
        
        </form>
        </div>
        </div>
        </div>
  );
}

export { Cadastro };