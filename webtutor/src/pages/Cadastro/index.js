import react from "react"
import './index.css';

function Cadastro() {

  return (
    <div>
      <div class="box">
        <div class="box-form">
          <form action="" method="POST" id="registerForm">
            <h2>Cadastro de Usúario</h2>
            <input type="text" id="nome" placeholder="Nome"></input>
            <input type="text" id="email" placeholder="E-mail"></input>
            <input type="password" id="senha" placeholder="Senha"></input>
            <input type="text" id="wpp" placeholder="Whatsapp"></input>
            <input type="text" id="formacao" placeholder="Formação"></input>
            <div>
              <option value="" selected disabled id="opcao" >Tipo de usuario</option>
              <select name="Tipo de usuario" required>
                <option value="Aluno" id="aluno" >Aluno</option>
                <option value="Professor" id="professor" >Professor</option>
              </select>
            </div>
            <input type="text" id="documentOf" />
            <button type="submit">Registrar-se</button><br></br>

          </form>
        </div>
      </div>
    </div>
  );
}

export { Cadastro };