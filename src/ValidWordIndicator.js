import React from 'react'

const ValidWordIndicator = ( {validWord, currLine, line} ) => {
  return (
    <div className='indicator' style={{backgroundColor: currLine !== line ? "#242424" : validWord ? "green" : "red"}}>

    </div>
  )
}

export default ValidWordIndicator