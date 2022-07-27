import React from 'react'
import Node from './Node'
import ValidWordIndicator from './ValidWordIndicator'

const BoardRow = ( {progress, rowColors, validWord, currLine, line} ) => {
  return (
    <div className='Board-Row'>
        <Node text={progress[0]} color={rowColors[0]}/>
        <Node text={progress[1]} color={rowColors[1]}/>
        <Node text={progress[2]} color={rowColors[2]}/>
        <Node text={progress[3]} color={rowColors[3]}/>
        <Node text={progress[4]} color={rowColors[4]}/>
        <ValidWordIndicator validWord={validWord} currLine={currLine} line={line}/>
    </div>
  )
}

export default BoardRow