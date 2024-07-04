import React, { useState } from 'react';
import './App.css';

function App() {
  const [detailsVisible, setDetailsVisible] = useState(true);

  const toggleDetails = () => {
    setDetailsVisible(!detailsVisible);
  };

  return (
    <div className="app">
      <div className="card">
        <img
          src="https://img.icons8.com/ios-filled/100/000000/visible.png"
          alt="Eye icon"
          className="icon"
        />
        <h2>Name: John Doe</h2>
        <p>Registration No: 123456</p>
        {detailsVisible && (
          <div className="details">
            <p>Additional details or content can go here...</p>
          </div>
        )}
        <button onClick={toggleDetails}>
          {detailsVisible ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
    </div>
  );
}

export default App;