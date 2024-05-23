import { Feedback } from '@mui/icons-material';
import './App.css';
// import Footer from './components/common/Footer';
// import Header from './components/common/Header';
import About from './pages/About';
import Home from './pages/Home';
import FeedBack from './pages/FeedBack';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>

      <Router>
            <Routes>
              <Route  path="/" element={<Home/>} />
              <Route  path="/about" element={<About/>} />
              <Route  path="/feedback" element={<FeedBack/>} />
            </Routes>
      </Router>

    </>
  );
}

export default App;
