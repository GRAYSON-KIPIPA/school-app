import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Home from './Pages/HomePage/Home';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Routing from './Router/Routes';

function App() {

  const [auth, setAuth] = useState(false)
  function handleUserAuth(e) {
    e.preventDefault()
    setAuth(!auth);
    <Link to = 'home' ></Link>
  }
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
