import { useState, createContext } from "react";

export const StatsContext = createContext();

export const StatsProvider = ({ children }) => {
  const [win, setWin] = useState(false);
  const [loose, setLoose] = useState(false);
  const [trials, setTrials] = useState(0);
  const value = {
    win,
    setWin,
    loose,
    setLoose,
    trials,
    setTrials,
  };

  return (
    <StatsContext.Provider value={value}>
      {children}
    </StatsContext.Provider>
  );
}

