import { WordInput } from "../components/WordInput"
import { useStats } from "../context/StatProvider"

export const Home = () => {
  const home = "home"
  const { test } = useStats()
  console.log(test)

  return (
    <>
      <h1>{home}</h1>
      <WordInput/>
    </>
  )
}
