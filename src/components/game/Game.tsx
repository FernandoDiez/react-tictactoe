import { useState, MouseEvent } from 'react'
import './Game.css'

interface props {
  game: string[],
  setGame: (game: string[]) => void
}

export const Game = ({ game, setGame }: props) => {
  const [isPlaying, setIsPlaying] = useState<string>('X')

  const checkIfISTheWinner = (gameStatus: string[]) => {
    // compruebo el estado del juego y retorno un resultado
    console.log(gameStatus)
    return true
  }

  const setValueItem = (event: MouseEvent) => {
    if (game[Number(event.currentTarget.id)] === '') {
      const newItems = game.map((item: string, index: number) => {
        if (index === Number(event.currentTarget.id)) {
          return isPlaying
        } else {
          return item
        }
      })
      //Compruebo si es ganador
      if (checkIfISTheWinner(newItems)) {
        //Se para el juego y se muestra el gaador
        console.log(`WINNER: ${isPlaying}`)
      } else {
        //se cambia de jugador y se continua el juego
        setIsPlaying(isPlaying === 'X' ? 'O' : 'X')
        console.log('CONTINUE')
      }
      setGame(newItems)
    }
  }

  return (
    <>
      <div className="line">
        <div className="item" id="0" onClick={setValueItem}><span>{game[0]}</span></div>
        <div className="item" id="1" onClick={setValueItem}><span>{game[1]}</span></div>
        <div className="item" id="2" onClick={setValueItem}><span>{game[2]}</span></div>
      </div>

      <div className="line line-middle">
        <div className="item" id="3" onClick={setValueItem}><span>{game[3]}</span></div>
        <div className="item" id="4" onClick={setValueItem}><span>{game[4]}</span></div>
        <div className="item" id="5" onClick={setValueItem}><span>{game[5]}</span></div>
      </div>

      <div className="line">
        <div className="item" id="6" onClick={setValueItem}><span>{game[6]}</span></div>
        <div className="item" id="7" onClick={setValueItem}><span>{game[7]}</span></div>
        <div className="item" id="8" onClick={setValueItem}><span>{game[8]}</span></div>
      </div>
    </>
  )
}