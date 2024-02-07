import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './components/Main';
import Footer from './components/Footer';
import HomePage from './components/Homepage';
import BookingPage from './components/BookingPage';
import Nav from './components/Nav';
import Header from './components/Header';
import BookingConfirmed from './components/BookingConfirmed';

function App() {
  return (
    <>
    <Router>
      <meta name="description" content="your text goes here"/>
      <meta name="og:title" content=""/>
      <meta name="og:description" content=""/>
      <meta name="og:image" content=""/>

      <Main>
        <Header/>
        <Nav/>
        <Routes> 
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
          <Route path="/confirmed" element={<BookingConfirmed/>}></Route>
        </Routes>
      </Main>
      <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
