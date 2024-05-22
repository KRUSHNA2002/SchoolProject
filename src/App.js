import './App.css';
// import Footer from './components/common/Footer';
// import Header from './components/common/Header';
import About from './pages/About';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>

      <Router>
            <Routes>
              <Route  path="/" element={<Home/>} />
              <Route  path="/about" element={<About/>} />
            </Routes>
      </Router>

    </>
  );
}

export default App;
