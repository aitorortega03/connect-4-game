import { Player } from "../types"

interface Props {
  winner: Player,
  currentPlayer: Player
}

export const GameStatus: React.FC<Props> = ({ winner, currentPlayer }) => {
  return (
    <div className="mb-4 text-2xl font-bold">
      {winner ? (
          winner === 'draw' as Player ? (
            <span className="text-gray-700">Draw!</span>
          ) : (
            <span className={winner === 'red' ? 'text-red-600' : 'text-yellow-500'}>
              Winner: {winner}!
            </span>
          )
        ) : (
          <span className={currentPlayer === 'red' ? 'text-red-600' : 'text-yellow-500'}>
            Turn: {currentPlayer}
          </span>
        )}
    </div>
  )
}