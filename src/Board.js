import React from 'react'
import BoardRow from './BoardRow'

const Board = ( {progress, gridColors} ) => {
  return (
    <div className='board'>
        <BoardRow progress={progress[0]} rowColors={gridColors[0]}/>
        <BoardRow progress={progress[1]} rowColors={gridColors[1]}/>
        <BoardRow progress={progress[2]} rowColors={gridColors[2]}/>
        <BoardRow progress={progress[3]} rowColors={gridColors[3]}/>
        <BoardRow progress={progress[4]} rowColors={gridColors[4]}/>
        <BoardRow progress={progress[5]} rowColors={gridColors[5]}/>
    </div>
  )
}

export default Board