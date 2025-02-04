import React from 'react';

function UserPlayZone({ currentChar, nextChars, onCharTyped }) {
  return (
    <div className="user-play-zone">
      <p>Current: {currentChar}</p>
      <p>Next: {nextChars.join('')}</p>
      <input type="text" maxLength="1" onChange={onCharTyped} />
    </div>
  );
}

export default UserPlayZone;