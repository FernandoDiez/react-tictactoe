import { useState, MouseEvent } from 'react'
import './Game.css'

interface props {
  game: string[],
  setGame: (game: string[]) => void
}

export const Game = ({ game, setGame }: props) => {
  const [isPlaying, setIsPlaying] = useState<string>('X')
  const [gameFinished, setGameFinished] = useState<boolean>(false)

  const checkIfISTheWinner = (gameStatus: string[]) => {
    const possibleWinnerLines: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let index = 0; index < possibleWinnerLines.length; index++) {
      const [a, b, c] = possibleWinnerLines[index]
      if (gameStatus[a] && gameStatus[a] === gameStatus[b] && gameStatus[a] === gameStatus[c]) {
        document.getElementById(`item-${a}`)?.classList.add('item-winner')
        document.getElementById(`item-${b}`)?.classList.add('item-winner')
        document.getElementById(`item-${c}`)?.classList.add('item-winner')
        return true
      }
    }
    return false
  }

  const setValueItem = (event: MouseEvent) => {
    if (game[Number(event.currentTarget.id)] === null && !gameFinished) {
      const newItems = game.map((item: string, index: number) => {
        if (index === Number(event.currentTarget.id)) {
          return isPlaying
        } else {
          return item
        }
      })
      if (checkIfISTheWinner(newItems)) {
        setGameFinished(true)
      } else {
        setIsPlaying(isPlaying === 'X' ? 'O' : 'X')
      }
      setGame(newItems)
    }
  }

  return (
    <>
      <div className="line">
        <div className="item" id="0" onClick={setValueItem}><span id="item-0">{game[0]}</span></div>
        <div className="item" id="1" onClick={setValueItem}><span id="item-1">{game[1]}</span></div>
        <div className="item" id="2" onClick={setValueItem}><span id="item-2">{game[2]}</span></div>
      </div>

      <div className="line line-middle">
        <div className="item" id="3" onClick={setValueItem}><span id="item-3">{game[3]}</span></div>
        <div className="item" id="4" onClick={setValueItem}><span id="item-4">{game[4]}</span></div>
        <div className="item" id="5" onClick={setValueItem}><span id="item-5">{game[5]}</span></div>
      </div>

      <div className="line">
        <div className="item" id="6" onClick={setValueItem}><span id="item-6">{game[6]}</span></div>
        <div className="item" id="7" onClick={setValueItem}><span id="item-7">{game[7]}</span></div>
        <div className="item" id="8" onClick={setValueItem}><span id="item-8">{game[8]}</span></div>
      </div>
    </>
  )
}