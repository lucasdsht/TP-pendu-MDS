import React from 'react';

export const LetterChoice = ({ selectedLetters, onLetterSelect, disable }) => {
  const generateAlphabet = () => {
    return Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  };

  const alphabet = generateAlphabet();

  return (
    <div>
      <h2>Choisissez une lettre</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {alphabet.map((letter) => (
          <button
            key={letter}
            onClick={() => onLetterSelect(letter)}
            disabled={selectedLetters.includes(letter) || disable == true}
            style={{
              width: '30px',
              height: '30px',
              margin: '5px',
              background: selectedLetters.includes(letter) ? '#ccc' : '#fff'
            }}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};

