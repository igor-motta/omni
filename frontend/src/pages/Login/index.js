import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import heroesImage from '../../assets/heroes.png';
import logoImage from '../../assets/logo.svg';
import api from '../../services/api';

import './style.css';


const Login = () => {
  const [id, setId] = useState('');
  const history = useHistory();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('session', { id });

      localStorage.setItem('plantId', id);
      localStorage.setItem('plantName', response.data.plant.name);

      history.push('/profile');
    } catch (err) {
      alert('falha no login!');
    } 
  };

  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImage} alt="Be The Hero" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input
            type="text"
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#A27952" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImage} alt="Heroes" />
    </div>
  );
};

export default Login;
