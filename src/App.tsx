import React from 'react'
import { useState } from 'react'
import { GameBoard } from './GameBoard'
import { Cell, CellRow, CellGrid, GameState } from './GameState'
import './GameService'
import { checkCell, createNewGame, flagCell } from './GameService'

const App = () => {
  const [gamestate, setGameState] = useState<GameState>({
    id: null,
    board: null,
    state: null,
    mines: null,
  })

  async function handleNewGame() {
    let json = await createNewGame()
    setGameState(json as GameState)
  }

  async function handleLeftClick(row: number, column: number) {
    let json = await checkCell(row, column, gamestate)
    setGameState(json as GameState)
  }

  async function handleRightClick(row: number, column: number) {
    let json = await flagCell(row, column, gamestate)
    setGameState(json as GameState)
  }

  return (
    <div className="App">
      <div>
        <h1>Welcome to Minesweeper!</h1>
        <h2>Game Status: {gamestate.state}</h2>
        <button onClick={handleNewGame}>New Game</button>
        <div className="App">
          <GameBoard
            id={gamestate.id}
            board={gamestate.board}
            state={gamestate.state}
            mines={gamestate.mines}
            leftClickFunction={handleLeftClick}
            rightClickFunction={handleRightClick}
          />
        </div>
      </div>
    </div>
  )
}

export default App
