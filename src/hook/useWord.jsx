import {useState, useEffect} from 'react'

export const useWord = () => {
  const [word, setWord] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const url = "https://raw.githubusercontent.com/nmondon/mots-frequents/master/data/frequence.json";

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomWord = data[randomIndex].label;
        setWord(randomWord);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { word, loading, error };
}
