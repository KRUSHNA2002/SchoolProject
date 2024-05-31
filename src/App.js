import { Feedback } from '@mui/icons-material';
import './App.css';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import About from './pages/About';
import Home from './pages/Home';
import FeedBack from './pages/FeedBack';
import ContactUs from './pages/contactUs';
import ScrollToTopButton from './components/common/scrolltoTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<FeedBack />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <ScrollToTopButton />
        <Footer />
      </Router>

    </>
  );
}

export default App;
