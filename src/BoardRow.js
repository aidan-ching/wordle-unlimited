import React from 'react'
import Node from './Node'

const BoardRow = ( {progress, rowColors} ) => {
  return (
    <div className='Board-Row'>
        <Node text={progress[0]} color={rowColors[0]}/>
        <Node text={progress[1]} color={rowColors[1]}/>
        <Node text={progress[2]} color={rowColors[2]}/>
        <Node text={progress[3]} color={rowColors[3]}/>
        <Node text={progress[4]} color={rowColors[4]}/>
    </div>
  )
}

export default BoardRow