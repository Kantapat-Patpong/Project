import React from 'react';

function Boss({ health }) {
  return (
    <div className="boss">
      <h2>Boss</h2>
      <p>Health: {health}</p>
    </div>
  );
}

export default Boss;