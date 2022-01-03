import React from 'react'
import App from './App'
import { Cell, CellRow, CellGrid, GameState } from './GameState'

export async function createNewGame() {
  const response = await fetch('https://minesweeper-api.herokuapp.com/games', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      difficulty: 0,
    }),
  })
  if (response.ok) {
    const json = (await response.json()) as GameState
    return json
  }
}

export async function checkCell(
  row: number,
  column: number,
  gamestate: GameState
) {
  const response = await fetch(
    'https://minesweeper-api.herokuapp.com/games/' + gamestate.id + '/check',
    {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        row: row,
        col: column,
      }),
    }
  )
  if (response.ok) {
    const json = (await response.json()) as GameState
    return json
  }
}

export async function flagCell(
  row: number,
  column: number,
  gamestate: GameState
) {
  const response = await fetch(
    'https://minesweeper-api.herokuapp.com/games/' + gamestate.id + '/flag',
    {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        row: row,
        col: column,
      }),
    }
  )
  if (response.ok) {
    const json = (await response.json()) as GameState
    return json
  }
}
