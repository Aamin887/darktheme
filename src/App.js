import { useState} from 'react';
import './App.css';
import { ThemeContext } from './components/ThemeContext';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';
import Nav from './components/Nav';

function App() {
  const [theme, setTheme] = useState(false)
  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">s
        <Nav theme={theme} setTheme={setTheme}/>
        <Header />
        <About />
        <CallToAction />
        <Footer />
      </div>
  </ThemeContext.Provider>
  );
}

export default App;
