import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({ children, updateBoard, index }) => {
  return (
    <div className='square'>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(['x','x','x','x','x','x','x','x','x',])
  return (
      <main className="board">
        <h1>Connect 4 Game</h1>
        <section className="game">
          {
            board.map((_, index) => {
              return (
                <Square
                  key={index}
                  index={index}
                >
                  {board[index]}
                </Square>
              )
            })
          }
        </section>
      </main>
  );
}

export default App
