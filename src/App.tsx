import { useEffect, useState } from "react"
import { Board, Player } from "./types"
import { Header } from "./components/Header"
import { GameBoard } from "./components/Board"
import { GameStatus } from "./components/GameStatus"
import { checkWinner } from "./utils/utils"

const App = () => {
  const [board, setBoard] = useState<Board>(Array(6).fill(null).map(() => Array(7).fill(null)))
  const [currentPlayer, setCurrentPlayer] = useState<Extract<Player, 'red' | 'yellow'>>('red')
  const [winner, setWinner] = useState<Player>(null)
  const [gameOver, setGameOver] = useState<boolean>(false)

  useEffect(() => {
    const result = checkWinner(board)
    if (result) {
      setWinner(result)
      setGameOver(true)
    }
  }, [board]);

  const handleColumnClick = (colIndex: number) => {
    if (gameOver) return;

    const newBoard = [...board];
    for (let row = 5; row >= 0; row--) {
      if (!newBoard[row][colIndex]) {
        newBoard[row][colIndex] = currentPlayer;
        setBoard(newBoard);
        setCurrentPlayer(currentPlayer === 'red' ? 'yellow' : 'red');
        break;
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <Header />
      <GameStatus winner={winner} currentPlayer={currentPlayer} />
      <GameBoard board={board} handleColumnClick={handleColumnClick}/>
    </div>
  )
}

export default App
