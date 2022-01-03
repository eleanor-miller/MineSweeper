import React from 'react'
import App from './App'
import { Cell, CellRow, CellGrid, GameState } from './GameState'

export function GameBoard(props: any) {
  async function handleLeftClickCell(row: number, column: number, cell: Cell) {
    if (cell == 'F') return
    props.leftClickFunction(row, column)
  }

  async function handleRightClickCell(
    event: MouseEvent,
    row: number,
    column: number
  ) {
    event.preventDefault()
    props.rightClickFunction(row, column)
  }

  return (
    <>
      <ul>
        {props.board?.map((boardRow: CellRow, rowIndex: number) => {
          return boardRow.map((cell: Cell, columnIndex: number) => {
            return (
              <li
                className={
                  (cell == '_' || cell == 'F' ? 'taken' : '') +
                  ' ' +
                  (cell == 'F' ? 'not-allowed-click' : '') +
                  ' ' +
                  (cell != ' ' && cell != 'F' ? 'revealed' : '')
                }
                key={columnIndex}
                onClick={() => handleLeftClickCell(rowIndex, columnIndex, cell)} //How to pass the cell contents ???
                onContextMenu={(event) =>
                  handleRightClickCell(
                    event as unknown as MouseEvent,
                    rowIndex,
                    columnIndex
                  )
                }
              >
                {cell == '_' ? ' ' : cell}
              </li>
            )
          })
        })}
      </ul>
    </>
  )
}
