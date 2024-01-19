import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Header from './components/Header/Header'
import NotFound from './components/NotFound/NotFound'

function App() {
  const mail_to = 'mymail@gmail.com'

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path='contact/:mail_to?' element={<Contact />} />
          </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </main>

    </>
  )
}

export default App
