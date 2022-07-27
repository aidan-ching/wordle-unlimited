import React from 'react'
import BoardRow from './BoardRow'


const Board = ( {progress, gridColors, validWord, currLine} ) => {
  return (
    <div className='board'>
        <BoardRow progress={progress[0]} rowColors={gridColors[0]} validWord={validWord} currLine={currLine} line={0}/>
        <BoardRow progress={progress[1]} rowColors={gridColors[1]} validWord={validWord} currLine={currLine} line={1}/>  
        <BoardRow progress={progress[2]} rowColors={gridColors[2]} validWord={validWord} currLine={currLine} line={2}/>
        <BoardRow progress={progress[3]} rowColors={gridColors[3]} validWord={validWord} currLine={currLine} line={3}/>
        <BoardRow progress={progress[4]} rowColors={gridColors[4]} validWord={validWord} currLine={currLine} line={4}/> 
        <BoardRow progress={progress[5]} rowColors={gridColors[5]} validWord={validWord} currLine={currLine} line={5}/>
    </div>
  )
}

export default Board