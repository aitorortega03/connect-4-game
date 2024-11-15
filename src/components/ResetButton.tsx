interface Props {
  resetGame: () => void
}

export const ResetButton: React.FC<Props> = ({ resetGame }) => {
  return (
    <button
      onClick={resetGame}
      className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
    >
      Restart Game
    </button>
  )
}