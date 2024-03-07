<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import Mark from './components/Mark';
import Title from './components/Title';

=======
import Titolo from './components/Titolo.jsx'
import Utente from './components/Utente.jsx'
import Ospite from './components/Ospite.jsx'
>>>>>>> 57047cd31eeac91229d1cfe3e9498d97dd17091c

import './App.css'

function App () {
  const utente = localStorage.getItem('utente')
  let UserComponent
  if (utente === 'ospite') {
    UserComponent = <Ospite />
  } else {
    UserComponent = <Utente nome={utente} />
  }
  return (
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Mark backgroundColor="yellow"> scritta evidenziata gilla</Mark>
    <Title/>
=======
    <div className='page'>
      <Titolo>il mio Hobby</Titolo>
      {UserComponent}
>>>>>>> 57047cd31eeac91229d1cfe3e9498d97dd17091c
    </div>
  )
}

export default App
