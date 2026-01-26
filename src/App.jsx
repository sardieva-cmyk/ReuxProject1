// src/App.jsx
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './features/counter/counterSlice';
import './App.css';

function App() {
  // Берём данные из Redux store
  const count = useSelector(state => state.counter.value);
  const text = useSelector(state => state.counter.welcomeText);
  const clicks = useSelector(state => state.counter.clicks);

  const dispatch = useDispatch();

  return (
    <div className="App" style={{ textAlign: 'center', padding: '40px' }}>
      <h1 style={{ color: '#646cff' }}>{text}</h1>
      
      <h2>Текущее значение: {count}</h2>
      <p>Всего кликов: {clicks}</p>

      <div style={{ margin: '30px 0' }}>
        <button 
          onClick={() => dispatch(decrement())}
          style={{ padding: '10px 20px', margin: '0 10px', fontSize: '18px' }}
        >
          − Уменьшить
        </button>

        <button 
          onClick={() => dispatch(increment())}
          style={{ padding: '10px 20px', margin: '0 10px', fontSize: '18px' }}
        >
          + Увеличить
        </button>

        <button 
          onClick={() => dispatch(reset())}
          style={{ padding: '10px 20px', margin: '0 10px', fontSize: '18px' }}
        >
          Сбросить
        </button>
      </div>
    </div>
  );
}

export default App;