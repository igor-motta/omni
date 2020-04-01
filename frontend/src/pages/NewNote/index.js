import './styles.css';

import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import logoImage from '../../assets/logo.svg';
import api from '../../services/api';

const NewNote = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');

  const plantId = localStorage.getItem('plantId');

  const history = useHistory();

  const handleNewNote = async e => {
    e.preventDefault();
    const data = {
      title,
      date,
      note,
    };

    try {
      await api.post('notes', data, {
        headers: { Authorization: plantId },
      });
      history.push('/profile');
    } catch (err) {
      alert('Erro ao cadastrar nota');
    }
  };

  return (
    <div className='new-note-container'>
      <div className='content'>
        <section>
          <img src={logoImage} alt='Be The Hero' />
          <h1>nova nota</h1>
          <p>tire anotações</p>
          <Link className='back-link' to='/profile'>
            <FiArrowLeft size={16} color='#e02041' />
            voltar para home
          </Link>
        </section>
        <form onSubmit={handleNewNote}>
          <input
            placeholder='titulo'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <input
            type='date'
            placeholder='data'
            value={date}
            onChange={e => setDate(e.target.value)}
          />
          <textarea
            placeholder='note'
            value={note}
            onChange={e => setNote(e.target.value)}
          />

          <button className='button' type='submit'>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewNote;
