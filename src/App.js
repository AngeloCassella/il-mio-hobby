import Titolo from './components/Titolo.jsx'
import Utente from './components/Utente.jsx'
import Ospite from './components/Ospite.jsx'
import Mark from './components/Mark';
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
    <div className='page'>
      <Titolo>il mio Hobby</Titolo>
      <Mark backgroundColor="yellow"> scritta evidenziata gilla</Mark>
      {UserComponent}
    </div>
  )
}

export default App
