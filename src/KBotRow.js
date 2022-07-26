import React from 'react'
import Key from './Key'
import {FiDelete} from 'react-icons/fi'
import {AiOutlineEnter} from 'react-icons/ai'

const KBotRow = ( {keyPress, del, submit, discovered, yellowLetters, greenLetters} ) => {
  return (
    <div className='keyboard-row'>
        <Key text={<AiOutlineEnter/>} keyPress={submit} discovered={discovered} yellowLetters={yellowLetters} greenLetters={greenLetters}/>
        <Key text="Z" keyPress={keyPress} discovered={discovered} yellowLetters={yellowLetters} greenLetters={greenLetters}/>
        <Key text="X" keyPress={keyPress} discovered={discovered} yellowLetters={yellowLetters} greenLetters={greenLetters}/>
        <Key text="C" keyPress={keyPress} discovered={discovered} yellowLetters={yellowLetters} greenLetters={greenLetters}/>
        <Key text="V" keyPress={keyPress} discovered={discovered} yellowLetters={yellowLetters} greenLetters={greenLetters}/>
        <Key text="B" keyPress={keyPress} discovered={discovered} yellowLetters={yellowLetters} greenLetters={greenLetters}/>
        <Key text="N" keyPress={keyPress} discovered={discovered} yellowLetters={yellowLetters} greenLetters={greenLetters}/>
        <Key text="M" keyPress={keyPress} discovered={discovered} yellowLetters={yellowLetters} greenLetters={greenLetters}/>
        <Key text={<FiDelete/>} keyPress={del} discovered={discovered} yellowLetters={yellowLetters} greenLetters={greenLetters}/>
    </div>
  )
}

export default KBotRow