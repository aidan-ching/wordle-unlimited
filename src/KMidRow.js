import React from 'react'
import Key from './Key'

const KMidRow = ( {keyPress, discovered, yellowLetters, greenLetters} ) => {
  return (
    <div className='keyboard-row'>
        <Key text="A" keyPress={keyPress} discovered={discovered} yellowLetters={yellowLetters} greenLetters={greenLetters}/>
        <Key text="S" keyPress={keyPress} discovered={discovered} yellowLetters={yellowLetters} greenLetters={greenLetters}/>
        <Key text="D" keyPress={keyPress} discovered={discovered} yellowLetters={yellowLetters} greenLetters={greenLetters}/>
        <Key text="F" keyPress={keyPress} discovered={discovered} yellowLetters={yellowLetters} greenLetters={greenLetters}/>
        <Key text="G" keyPress={keyPress} discovered={discovered} yellowLetters={yellowLetters} greenLetters={greenLetters}/>
        <Key text="H" keyPress={keyPress} discovered={discovered} yellowLetters={yellowLetters} greenLetters={greenLetters}/>
        <Key text="J" keyPress={keyPress} discovered={discovered} yellowLetters={yellowLetters} greenLetters={greenLetters}/>
        <Key text="K" keyPress={keyPress} discovered={discovered} yellowLetters={yellowLetters} greenLetters={greenLetters}/>
        <Key text="L" keyPress={keyPress} discovered={discovered} yellowLetters={yellowLetters} greenLetters={greenLetters}/>
    </div>
  )
}

export default KMidRow