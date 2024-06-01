import './App.css';
import Footer from './components/common/Footer';
// import Header from './components/common/Header';
import About from './pages/About';
import Home from './pages/Home';
import FeedBack from './pages/FeedBack';
import LoadingSpinner from './components/common/LoadingSpinner';
import ScrollToTopButton from './components/common/scrolltoTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentDash from './components/dashboard/StudentDash';

function App() {
  return (
    <>

      <Router>
        {/* <LoadingSpinner /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<FeedBack />} />
        </Routes>
        <ScrollToTopButton />
        <Footer />
      </Router>

    </>
  );
}

export default App;
