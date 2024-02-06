import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <meta name="description" content="your text goes here"/>
      <meta name="og:title" content=""/>
      <meta name="og:description" content=""/>
      <meta name="og:image" content=""/>
      <Header/>
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
