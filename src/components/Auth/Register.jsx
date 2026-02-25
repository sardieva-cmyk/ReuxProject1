import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector(state => state.auth);

  const [form, setForm] = useState({ username: '', password: '', role: 'user' });

  useEffect(() => {
    if (user) navigate('/');
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(form));
  };

  return (
    <div className="auth-card">
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input placeholder="Имя пользователя" value={form.username} onChange={e=>setForm({...form,username:e.target.value})} />
        <input type="password" placeholder="Пароль" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} />
        <select value={form.role} onChange={e=>setForm({...form,role:e.target.value})}>
          <option value="user">Пользователь</option>
          <option value="root">Root (админ)</option>
        </select>
        <button type="submit" disabled={loading}>Зарегистрироваться</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}

export default Register;
