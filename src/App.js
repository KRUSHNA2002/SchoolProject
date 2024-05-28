import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import FeedBack from './pages/FeedBack';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Contactus from './pages/Contactus';
function App() {
  return (
    <>

      <Router>
            <Routes>
              <Route  path="/" element={<Home/>} />
              <Route  path="/about" element={<About/>} />
              <Route  path="/feedback" element={<FeedBack/>} />
              {/* <Route  path="/contactus" element={<Contactus/>} /> */}
              <Route  path="/login" element={<Login/>} />
              <Route  path="/register" element={<Register/>} />
            </Routes>
      </Router>

    </>
  );
}

export default App;
