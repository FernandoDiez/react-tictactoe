import { useState } from 'react';
import './App.css'
import { Game } from './components/game/Game'
import { Header } from './components/header/Header'
import { Players } from './components/players/Players'

function App() {
  const [game, setGame] = useState<string[]>(['', '', '', '', '', '', '', '', ''])
  return (
    <div className='container'>
      <Header />
      <Players />
      <Game game={game} setGame={setGame} />
    </div>
  )
}

export default App