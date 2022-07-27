import {CgRedo} from 'react-icons/cg'

const Header = ( {handleReset, time} ) => {



  return (
    <div>
      <div className='header'> 

        <div className='header-text'>Wordle Unlimited</div>
        <div className='timer-reset-stack'>
          <p>{time}</p>
          <CgRedo className='reset-button' onClick={handleReset}/>
        </div>

        
      </div>

      <div className='header-break'></div>
    </div>
    
  )
}

export default Header