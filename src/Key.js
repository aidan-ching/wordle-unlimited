import React from 'react'

const Key = ( {text, keyPress, discovered, yellowLetters, greenLetters} ) => {
  return (
    <div className='key' onClick={(e) =>{
        keyPress(e);
        console.log(discovered.includes(text));
    }}
     style={{backgroundColor: greenLetters.includes(text) ? "green" : yellowLetters.includes(text) ? "#9e970b" : discovered.includes(text) ? '#2b2b2b' : 'grey'}}>
        {text}
    </div>
  )
}

export default Key