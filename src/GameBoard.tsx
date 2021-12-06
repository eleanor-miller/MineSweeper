import React from 'react'
import './App'
import { Cell, CellRow, CellGrid, GameState } from './GameState'

export function GameBoard(game: GameState) {
  function handleClickCell(row: number, column: number) {
    console.log(`You clicked on row ${row} and column ${column}`)
  }

  return (
    <>
      <ul>
        {game.board?.map((boardRow, rowIndex) => {
          console.log(
            `The rowIndex is ${rowIndex} and the boardRow is ${boardRow}`
          )
          return boardRow.map((cell, columnIndex) => {
            console.log(
              `-- With the inside loop the columnIndex is ${columnIndex} and the cell is ${cell}`
            )
            return (
              <li
                key={columnIndex}
                onClick={() => handleClickCell(rowIndex, columnIndex)}
              >
                {cell}
              </li>
            )
          })
        })}
      </ul>
    </>
  )
}
