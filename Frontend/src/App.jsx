import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {HelmetProvider} from 'react-helmet-async'
import Home from './components/Home.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
 

  return (
    <Router>
      <HelmetProvider>
        <Header/>
        <Routes>
          {/* CarRepair routes */}
        </Routes>

        <Routes>
          {/* CarWash routes */}
        </Routes>

        <Routes>
          {/* Market routes */}
          <Route path="/" element={<Home/>}/>
        </Routes>

        <Routes>
          {/* Profile routes */}
        </Routes>

        <Routes>
          {/* Towing routes */}
        </Routes>
        <Footer />
      </HelmetProvider>
    </Router>
  )
}

export default App
