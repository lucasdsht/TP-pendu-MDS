import { Routes } from 'react-router-dom'
import './App.css'
import { Route } from 'react-router-dom'
import { Home } from './pages'
import { Layout } from './components/Layout'

function App() {

  return (
    <Layout>
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/play' element={<Home />} />
        <Route path='/stats' element={<Home />} />
      </Routes>
    </Layout>
  )
}

export default App
