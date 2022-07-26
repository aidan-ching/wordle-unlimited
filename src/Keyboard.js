import React from 'react'
import KTopRow from './KTopRow'
import KMidRow from './KMidRow'
import KBotRow from './KBotRow'

const Keyboard = ( {keyPress, del, submit, discovered, yellowLetters, greenLetters} ) => {
  return (
    <div className='keyboard'>
        <KTopRow keyPress={keyPress} discovered={discovered} yellowLetters={yellowLetters} greenLetters={greenLetters}/>
        <KMidRow keyPress={keyPress} discovered={discovered} yellowLetters={yellowLetters} greenLetters={greenLetters}/>
        <KBotRow keyPress={keyPress} del={del} submit={submit} discovered={discovered} yellowLetters={yellowLetters} greenLetters={greenLetters}/>

    </div>
  )
}

export default Keyboard