import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérets</h3>
      <ul>
        <li className="hobby">
          <li className="fas fa-running"></li>
          <span>Sport en Salle </span>
        </li>
        <li className="hobby">
          <li className="fas fa-swimmer"></li>
          <span>Surf</span>
        </li>
        <li className="hobby">
          <li className="fab fa-bitcoin"></li>
          <span>Cryptomonnaies </span>
        </li>
        <li className="hobby">
          <li className="fas fa-chart-line"></li>
          <span>Finances</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
