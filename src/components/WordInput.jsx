export const WordInput = ({ word, selectedLetters = [] }) => (
  <div>
    {word.split('').map((letter, index) => (
      <input
        key={index}
        type="text"
        value={selectedLetters.includes(letter.toUpperCase()) ? letter.toUpperCase() : ''}
        readOnly
        style={{ border: "1px solid black", width: '20px', textAlign: 'center', marginRight: '5px', background: 'transparent', pointerEvents: 'none' }}
      />
    ))}
  </div>
);

