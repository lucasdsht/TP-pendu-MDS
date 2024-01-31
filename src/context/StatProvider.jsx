import React, { createContext, useContext } from "react"

const StatsContext = createContext({})

export const StatsProvider = ({ children }) => {
  const value = { test: "test" }
  return <StatsContext.Provider value={value}>{children}</StatsContext.Provider>
}

export const useStats = () => useContext(StatsContext)
