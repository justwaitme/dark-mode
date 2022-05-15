import React, {useState} from 'react';
import './App.css';
import './index.css'
import NavBar from './components/NavBar';
import Main from './components/Main';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode()
  {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div className='container'>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Main darkMode={darkMode}/>
    </div>
  );
}

export default App;
