import { useState, useContext, MouseEvent } from 'react'
import { GlobalContext } from '../app/App'
import './Game.css'

export const Game = () => {
  const [game, setGame] = useState(Array(9).fill(null))
  const [gameFinished, setGameFinished] = useState<boolean>(false)
  const { isPlaying, setIsPlaying } = useContext(GlobalContext)

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

  const resetGame = () => {
    Array.from(document.getElementsByClassName('item')).forEach(item => item.classList.remove('item-winner'))
    setGame(Array(9).fill(null))
    setIsPlaying('X')
    setGameFinished(false)

  }

  return (
    <>
      <button onClick={resetGame}>RESTART GAME</button>
      <div id="board">
        <div className="line">
          <div id="0" data-testid="test-item-0" onClick={setValueItem}><span className="item" id="item-0">{game[0] || ''}</span></div>
          <div id="1" data-testid="test-item-1" onClick={setValueItem}><span className="item" id="item-1">{game[1] || ''}</span></div>
          <div id="2" data-testid="test-item-2" onClick={setValueItem}><span className="item" id="item-2">{game[2] || ''}</span></div>
        </div>

        <div className="line line-middle">
          <div id="3" data-testid="test-item-3" onClick={setValueItem}><span className="item" id="item-3">{game[3] || ''}</span></div>
          <div id="4" data-testid="test-item-4" onClick={setValueItem}><span className="item" id="item-4">{game[4] || ''}</span></div>
          <div id="5" data-testid="test-item-5" onClick={setValueItem}><span className="item" id="item-5">{game[5] || ''}</span></div>
        </div>

        <div className="line">
          <div id="6" data-testid="test-item-6" onClick={setValueItem}><span className="item" id="item-6">{game[6] || ''}</span></div>
          <div id="7" data-testid="test-item-7" onClick={setValueItem}><span className="item" id="item-7">{game[7] || ''}</span></div>
          <div id="8" data-testid="test-item-8" onClick={setValueItem}><span className="item" id="item-8">{game[8] || ''}</span></div>
        </div>
      </div>
    </>
  )
}