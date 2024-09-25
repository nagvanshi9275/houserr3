import React from "react";

const Renderhome = ({ fruits }) => {
  return (
    <div>
      <h2>Fruits Information</h2>
      <ul>
        {fruits.length > 0 ? (
          fruits.map((fruit, index) => (
            <li key={index} style={{ marginBottom: "20px" }}>
              <h3>{fruit.name}</h3>
      
            </li>
          ))
        ) : (
          <p>No fruit found</p>
        )}
      </ul>
    </div>
  );
};

export default Renderhome;
