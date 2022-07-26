import React from 'react'
import { AiOutlineClose } from "react-icons/ai";

const ModalInterior = ( {close, solution, currLine, reset} ) => {
  return (
    <div className='modal'>
        <div className='modal-stack'>
            <div style={{margin: '20px'}}>
                <div>Correct word is <b>{solution}</b></div>
                <div>{currLine} tries were used</div>
            </div>
            <AiOutlineClose className='modal-close-button' onClick={close}/>

        </div>
        <div className='modal-reset-button' onClick={reset}>Play Again</div>
    </div>
  )
}

export default ModalInterior