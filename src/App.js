import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import FeedBack from './pages/FeedBack';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Contactus from './pages/Contactus';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentDash from './components/dashboard/StudentDash';
function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<FeedBack />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/studentdash" element={<StudentDash />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
