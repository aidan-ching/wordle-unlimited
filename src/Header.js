import React from 'react'
import {CgRedo} from 'react-icons/cg'

const Header = ( {reset} ) => {
  return (
    <div className='header'> 
      <div className='header-text'>Wordle Unlimited</div>
      <CgRedo className='reset-button' onClick={reset}/>
    </div>
    
  )
}

export default Header