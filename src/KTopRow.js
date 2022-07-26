import React from 'react'
import Key from './Key'

const KTopRow = ( {keyPress, discovered, yellowLetters, greenLetters} ) => {
  return (
    <div className='keyboard-row'>
        <Key text="Q" keyPress={keyPress} discovered={discovered} yellowLetters={yellowLetters} greenLetters={greenLetters}/>
        <Key text="W" keyPress={keyPress} discovered={discovered} yellowLetters={yellowLetters} greenLetters={greenLetters}/>
        <Key text="E" keyPress={keyPress} discovered={discovered} yellowLetters={yellowLetters} greenLetters={greenLetters}/>
        <Key text="R" keyPress={keyPress} discovered={discovered} yellowLetters={yellowLetters} greenLetters={greenLetters}/>
        <Key text="T" keyPress={keyPress} discovered={discovered} yellowLetters={yellowLetters} greenLetters={greenLetters}/>
        <Key text="Y" keyPress={keyPress} discovered={discovered} yellowLetters={yellowLetters} greenLetters={greenLetters}/>
        <Key text="U" keyPress={keyPress} discovered={discovered} yellowLetters={yellowLetters} greenLetters={greenLetters}/>
        <Key text="I" keyPress={keyPress} discovered={discovered} yellowLetters={yellowLetters} greenLetters={greenLetters}/>
        <Key text="O" keyPress={keyPress} discovered={discovered} yellowLetters={yellowLetters} greenLetters={greenLetters}/>
        <Key text="P" keyPress={keyPress} discovered={discovered} yellowLetters={yellowLetters} greenLetters={greenLetters}/>
    </div>
  )
}

export default KTopRow