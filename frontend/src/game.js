import React, { useState, useEffect } from 'react';
import Boss from './component/boss.js';
import UserPlayZone from './component/user_playzone.js';
import detectChar from './function/detect_char.js';
import generateChar from './function/generate_char.js';

function Game() {
  const [bossHealth, setBossHealth] = useState(10000);
  const [currentChar, setCurrentChar] = useState(generateChar());
  const [nextChars, setNextChars] = useState([generateChar(), generateChar()]);
  const [typedChar, setTypedChar] = useState('');

  const handleCharTyped = (event) => {
    const char = event.target.value;
    setTypedChar(char);

    if (detectChar(char, currentChar)) {
      setBossHealth(bossHealth - 1);
      setCurrentChar(nextChars[0]);
      setNextChars([nextChars[1], generateChar()]);
    }

    event.target.value = ''; // Clear input field
  };

  return (
    <div className="game">
      <Boss health={bossHealth} />
      <UserPlayZone
        currentChar={currentChar}
        nextChars={nextChars}
        onCharTyped={handleCharTyped}
      />
    </div>
  );
}

export default Game;