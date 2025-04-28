import { useEffect, useState } from "react";

const MemoryGame = () => {
  const [gridSize, setGridSize] = useState(4);
  const [cards, setCards] = useState([]);
  const [maxMoves, setMaxMoves] = useState(5); // User selected max moves
  const [movesLeft, setMovesLeft] = useState(5); // Actual remaining moves
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [gamestatus, setGamestatus] = useState("playing"); // 'playing', 'won', 'lost'
  const [won, setWon] = useState(false);

  const handleGridSizeChange = (e) => {
    const size = parseInt(e.target.value);
    if (size >= 2 && size <= 10) setGridSize(size);
  };

  const handleMoves = (e) => {
    const val = parseInt(e.target.value);
    if (val >= 0) {
      setMaxMoves(val);
      setMovesLeft(val);
    }
  };

  const initializeGame = () => {
    const totalCards = gridSize * gridSize;
    const pairCount = Math.floor(totalCards / 2);
    const numbers = [...Array(pairCount).keys()].map((n) => n + 1);
    const shuffledCards = [...numbers, ...numbers]
      .sort(() => Math.random() - 0.5)
      .slice(0, totalCards)
      .map((number, index) => ({ id: index, number }));

    setCards(shuffledCards);
    setFlipped([]);
    setSolved([]);
    setWon(false);
    setGamestatus("playing");
    setMovesLeft(maxMoves);
  };

  useEffect(() => {
    initializeGame();
  }, [gridSize]);

  const checkMatch = (secondId) => {
    const [firstId] = flipped;
    if (cards[firstId].number === cards[secondId].number) {
      setSolved((prev) => [...prev, firstId, secondId]);
      setFlipped([]);
      setDisabled(false);
    } else {
      setTimeout(() => {
        setFlipped([]);
        setDisabled(false);
      }, 1000);
    }
  };

  const handleClick = (id) => {
    if (disabled || gamestatus !== "playing") {
      return;
    }
    if (flipped.length === 0) {
      setFlipped([id]);
      return;
    }
    if (flipped.length === 1) {
      setDisabled(true);
      if (id !== flipped[0]) {
        setFlipped([...flipped, id]);
        checkMatch(id);

        // 🛑 Decrease move after second flip
        if (maxMoves !== 0) {
          setMovesLeft((prev) => prev - 1);
        }
      } else {
        setFlipped([]);
        setDisabled(false);
      }
    }
  };

  const isFlipped = (id) => flipped.includes(id) || solved.includes(id);
  const isSolved = (id) => solved.includes(id);

  useEffect(() => {
    if (solved.length === cards.length && cards.length > 0) {
      setWon(true);
      setGamestatus("won");
    }
  }, [solved, cards]);

  useEffect(() => {
    if (movesLeft === 0 && solved.length !== cards.length && maxMoves !== 0) {
      setGamestatus("lost");
    }
  }, [movesLeft, solved, cards, maxMoves]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-grey-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Memory Game</h1>

      {/* Inputs */}
      <div className="mb-4">
        <label htmlFor="gridSize" className="mr-2">
          Grid Size: (max 10)
        </label>
        <input
          type="number"
          id="gridSize"
          min="2"
          max="10"
          value={gridSize}
          onChange={handleGridSizeChange}
          className="border-2 border-gray-300 rounded px-2 py-1"
        />

        <label htmlFor="moves" className="mr-2 ml-2">
          Max Moves (0 for Unlimited):
        </label>
        <input
          type="number"
          id="moves"
          min="0"
          max="100"
          value={maxMoves}
          onChange={handleMoves}
          className="border-2 border-gray-300 rounded px-2 py-1"
        />

        <div className="flex items-center justify-center mt-2">
          Moves Left: {maxMoves === 0 ? "∞" : movesLeft}
        </div>
      </div>

      {/* Grid */}
      <div
        className={`grid gap-2 mb-4`}
        style={{
          gridTemplateColumns: `repeat(${gridSize},minmax(0,1fr))`,
          width: `min(100%, ${gridSize * 5.5}rem)`,
        }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleClick(card.id)}
            className={`aspect-square flex items-center justify-center text-xl font-bold rounded-lg cursor-pointer transition-all duration-300 ${
              isFlipped(card.id)
                ? isSolved(card.id)
                  ? "bg-green-500 text-white"
                  : "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-400"
            }`}
          >
            {isFlipped(card.id) ? card.number : "?"}
          </div>
        ))}
      </div>

      {/* Status */}
      {gamestatus === "won" && (
        <div className="mt-4 text-4xl text-green-600 animate-bounce">
          You Won!
        </div>
      )}
      {gamestatus === "lost" && (
        <div className="mt-4 text-4xl text-red-600 animate-bounce">
          You Lost!
        </div>
      )}

      {/* Reset Button */}
      <button
        onClick={initializeGame}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
      >
        {gamestatus !== "playing" ? "Play Again" : "Reset"}
      </button>
    </div>
  );
};

export default MemoryGame;

