import React, { useState, useEffect } from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import logoImage from '../../assets/logo.svg';
import api from '../../services/api';
import './styles.css';

const Profile = () => {
  const [notes, setNotes] = useState([]);

  const plantName = localStorage.getItem('plantName');
  const plantId = localStorage.getItem('plantId');

  const history = useHistory();

  const handleDeleteNote = async (id) => {
    try {
      await api.delete(`notes/${id}`, {
        headers: {
          Authorization: plantId,
        },
      });

      setNotes(notes.filter((note) => note.id != id));
    } catch (err) {
      alert('Erro ao deletar nota');
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };

  useEffect(() => {
    api
        .get('profile', {
          headers: {
            Authorization: plantId,
          },
        })
        .then((response) => {
          setNotes(response.data.notes);
        });
  }, [plantId]);

  return (
    <div className='profile-container'>
      <header>
        <img src={logoImage} alt='Be The Hero' />
        <span>Bem vinda, {plantName}</span>
        <Link className='button' to='/notes/new'>
          nova nota
        </Link>
        <button onClick={handleLogout} type='button'>
          <FiPower size={18} color='#e02041' />
        </button>
      </header>

      <h1>notas</h1>

      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <strong>TITLE</strong>
            <p>{note.title}</p>

            <strong>DATA</strong>
            <p>{note.date}</p>

            <strong>NOTE</strong>
            <p>{note.note}</p>
            <button onClick={() => handleDeleteNote(note.id)} type='button'>
              <FiTrash2 size={20} color='#a8a8b3' />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
