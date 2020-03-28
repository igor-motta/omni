import React from "react";

import "./style.css";
import logoImage from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const Register = () => {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImage} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e happy growing!</p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Já tenho cadastro
          </Link>
        </section>
        <form>
          <input placeholder="Nome da Planta" />
          <input placeholder="Genética" />
          <input placeholder="Apelido" />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
