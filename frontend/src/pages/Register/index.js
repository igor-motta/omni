import './style.css';

import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import logoImage from '../../assets/logo.svg';
import api from '../../services/api';

const Register = () => {
  const [name, setName] = useState('');
  const [strain, setStrain] = useState('');
  const [nickname, setNickname] = useState('');

  const history = useHistory();

  const handleRegister = async (event) => {
    event.preventDefault();
    const data = { name, strain, nickname };

    try {
      const response = await api.post('plants', data);
      alert(`Seu ID de acesso ${response.data.id}`);
      history.push('/');
    } catch (err) {
      alert('Erro no cadastro!');
    }
  };

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
        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome da Planta"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Genética"
            value={strain}
            onChange={(e) => setStrain(e.target.value)}
          />
          <input
            placeholder="Apelido"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
