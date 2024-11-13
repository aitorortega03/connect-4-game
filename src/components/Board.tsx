import { Board } from "../types"

interface Props {
  board: Board,
  handleColumnClick: (colIndex: number) => void
}

export const GameBoard: React.FC<Props> = ({ board, handleColumnClick}) => {
  return (
    <div className="bg-blue-500 p-4 rounded-lg shadow-lg">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((cell, colIndex) => (
              <div 
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handleColumnClick(colIndex)}
              className="w-16 h-16 bg-blue-300 m-1 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-200 transition-colors"
              >
                {cell && <div className={`w-14 h-14 rounded-full ${
                      cell === 'red' ? 'bg-red-500' : 'bg-yellow-400'
                    } transition-all duration-300 transform scale-90 hover:scale-100`}/>}
              </div>
            ))}
          </div>
        ))}
      </div>
  )
}