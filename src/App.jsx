import { Routes } from 'react-router-dom'
import './App.css'
import { Route } from 'react-router-dom'
import { Home, Play, Stats, NotFound } from './pages'
import { Layout } from './components/Layout'

function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/play' element={<Play />} />
        <Route path='/stats' element={<Stats />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
