import { SetStateAction, createContext, useState, } from 'react'
import { Game } from '../game/Game'
import { Title } from '../title/Title'

interface globalContext {
  title: string,
  isPlaying: string,
  setIsPlaying: React.Dispatch<SetStateAction<string>>
}

export const GlobalContext = createContext<globalContext>({
  title: '',
  isPlaying: 'X',
  setIsPlaying: () => ''
})

function App() {
  const title = 'TRES EN RAYA'
  const [isPlaying, setIsPlaying] = useState('X')

  return (
    <GlobalContext.Provider value={{ title, isPlaying, setIsPlaying }}>
      <Title />
      <Game />
    </GlobalContext.Provider>
  )
}

export default App