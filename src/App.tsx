import React from 'react'
import { useState } from 'react'
import { GameBoard } from './GameBoard'
import { Cell, CellRow, CellGrid, GameState } from './GameState'

function App() {
  const [gamestate, setGameState] = useState<GameState>({
    id: null,
    board: null,
    state: null,
    mines: null,
  })

  async function handleNewGame() {
    const response = await fetch(
      'https://minesweeper-api.herokuapp.com/games',
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          difficulty: 0,
        }),
      }
    )
    if (response.ok) {
      const json = (await response.json()) as GameState
      console.log(json)
      setGameState(json)
    }
  }

  return (
    <div className="App">
      <button onClick={handleNewGame}>New Game</button>
      {/* <GameBoard props={gamestate} /> */}
      <div>{gamestate.id}</div>
    </div>
  )
}

export default App
