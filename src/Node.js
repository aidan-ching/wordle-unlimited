import React from 'react'

const Node = ( {text, color} ) => {
  return (
    <div className='Node' style={{backgroundColor: color}}> {text} </div>
  )
}

export default Node