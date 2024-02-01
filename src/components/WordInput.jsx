import { useState, useEffect } from "react";

export const WordInput = () => {
  const [word, setWord] = useState("")
  const url = "https://raw.githubusercontent.com/nmondon/mots-frequents/master/data/frequence.json"

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomWord = data[randomIndex].label;
        setWord(randomWord);
      });
  }, []);

  return (
    <>
      <p>{word}</p>
      <div>
        {word.split('').map((letter, index) => (
          <input
            key={index}
            type="text"
            value={letter}
            readOnly
            style={{ width: '20px', textAlign: 'center', marginRight: '5px', border: 'none', background: 'transparent', pointerEvents: 'none' }}
          />
        ))}
      </div>
    </>
  )
}
