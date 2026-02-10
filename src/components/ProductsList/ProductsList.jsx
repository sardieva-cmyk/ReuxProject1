import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../features/content/contentSlice';
import './ProductsList.css';

function ProductsList() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.content.products.items);
  const loading = useSelector(state => state.content.products.loading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="products-container">
        <div className="loading">⏳ Загрузка боевых единиц...</div>
      </div>
    );
  }

  return (
    <div className="products-container">
      <h2>🛠️ Боевые единицы</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p className="category">{product.category}</p>
            <div className="stats">
              <div className="stat">
                <span className="label">Урон</span>
                <div className="bar-container">
                  <div 
                    className="bar" 
                    style={{ 
                      width: `${product.damage}%`,
                      background: product.damage > 80 ? '#e74c3c' : product.damage > 50 ? '#f39c12' : '#f1c40f'
                    }}
                  ></div>
                </div>
                <span className="value">{product.damage}</span>
              </div>
              <div className="stat">
                <span className="label">Броня</span>
                <div className="bar-container">
                  <div 
                    className="bar" 
                    style={{ 
                      width: `${product.armor}%`,
                      background: '#3498db'
                    }}
                  ></div>
                </div>
                <span className="value">{product.armor}</span>
              </div>
            </div>
            <div className="price">
              <span className="currency">₽</span>
              <span className="amount">{product.price}</span>
            </div>
            <button className="buy-btn">🛒 Приобрести</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
