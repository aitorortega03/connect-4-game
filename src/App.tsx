import { useState } from "react"
import { Board, Player } from "./types"
import { Header } from "./components/Header"

const App = () => {
  const [board, setBoard] = useState<Board>(Array(6).fill(null).map(() => Array(7).fill(null)))
  const [currentPlayer, setCurrentPlayer] = useState<Extract<Player, 'red' | 'yellow'>>('red')
  const [winner, setWinner] = useState<Player>(null)
  const [gameOver, setGameOver] = useState<boolean>(false)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <Header />
    </div>
  )
}

export default App
