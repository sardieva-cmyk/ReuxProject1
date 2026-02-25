import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector(state => state.auth);

  const [form, setForm] = useState({ username: '', password: '' });

  useEffect(() => {
    if (user) navigate('/');
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form));
  };

  return (
    <div className="auth-card">
      <h2>Вход</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input placeholder="Имя пользователя" value={form.username} onChange={e=>setForm({...form,username:e.target.value})} />
        <input type="password" placeholder="Пароль" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} />
        <button type="submit" disabled={loading}>Войти</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}

export default Login;
