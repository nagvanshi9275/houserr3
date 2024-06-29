




import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/fruit')
      .then(response => response.json())
      .then(data => setFruits(data))
      .catch(error => console.error('Error fetching fruits:', error));
  }, []);

  return (
    <div className="App">
      <h1>Fruit List</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;















