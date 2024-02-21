import React, { useState } from 'react';
import { WordInput } from "../components/WordInput";
import { LetterChoice } from '../components/LetterChoice.jsx';
import { useWord } from '../hook/useWord.jsx';
import { useStats } from '../hook/useStats.jsx';
import { useEffect } from 'react';

export const Play = () => {
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [guess, setGuess] = useState('');
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [name, setName] = useState(''); // Ajout d'une variable d'état pour le nom
  const { word, loading, error } = useWord();
  const { win, setWin, loose, setLoose, trials, setTrials } = useStats();
  const [disable, setDisable] = useState(false);

  const loooseGame = () => {
    if (trials == 9) {
      setLoose(true);
    }
  }

  const winGame = (word, selectedWord) => {
    console.log(word.toUpperCase().split(''));
    console.log(selectedWord);
    console.log(word.toUpperCase().split('').every(letter => selectedWord.includes(letter)), "|||")
    if (word.toUpperCase().split('').every(letter => selectedWord.includes(letter))) {
      if(!win){
      setWin(true);
      alert("Congratulations! You've guessed the word.");
    }
    const scores = JSON.parse(localStorage.getItem('scores')) || [];

    scores.push({ name, trials });
  
    localStorage.setItem('scores', JSON.stringify(scores));
    }
  }

  useEffect(() => {
    loooseGame();
    if (word && selectedLetters.length > 0) {
      winGame(word, selectedLetters);
    }

    if (win == true || loose == true) {
      setDisable(true);
    }
  })

  const addSelectedLetter = (letter) => {
    if (!selectedLetters.includes(letter)) {
      setSelectedLetters(prev => [...prev, letter]);
    }
    if (!word.includes(letter)) {
      setWrongGuesses(prev => [...prev, letter]);
      setTrials(trials + 1);
    }
  };

  const handleGuessChange = (e) => {
    const newGuess = e.target.value.toLowerCase();
    setGuess(newGuess);
    newGuess.split('').forEach(letter => {
      if (word.includes(letter) && !selectedLetters.includes(letter)) {
        addSelectedLetter(letter);
      }
    });
  };

  const handleGuessSubmit = (e) => {
    e.preventDefault();
    if (guess === word.toLowerCase()) {
      alert("Congratulations! You've guessed the word.");
    } else {
      setTrials(trials + 1);
      setGuess('');
    }
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();

    const scores = JSON.parse(localStorage.getItem('scores')) || [];

    scores.push({ name, trials });

    localStorage.setItem('scores', JSON.stringify(scores));

    setName('');
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(word);

  return (
    <>
      <h1>Jouer au pendu</h1>
      <WordInput word={word} selectedLetters={selectedLetters} />
      <LetterChoice disable={disable} selectedLetters={selectedLetters} onLetterSelect={addSelectedLetter} />
      {win && (
               <form onSubmit={handleNameSubmit}>
               <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Votre nom" />
               <button type="submit">Envoyer</button>
             </form>
      )}
      <div>
        <form onSubmit={handleGuessSubmit}>
          <label htmlFor="word-guess">Trouvez le mot</label>
          <input
            disabled={disable}
            id="word-guess"
            type="text"
            value={guess}
            onChange={handleGuessChange}
            placeholder="Enter your guess"
          />
          <button type="submit">Envoyer</button>
          {loose && <p>Perdu ! Le mot etait {word}</p>}
          {loose && <button onClick={() => window.location.reload()}>Rejouer</button>}
        </form>
      </div>
    </>
  );
};