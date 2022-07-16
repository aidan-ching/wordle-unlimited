import React, { useState, useEffect } from 'react'
import Header from './Header';
import Board from './Board';


function App() {
  const [progress, setProgress] = useState(Array(6).fill(Array(0))); //this is this hook for the input that the user puts in 
  const [currLine, setCurrLine] = useState(0); //this is the line that the game is in currently
  const [answers, setAnswers] = useState([]);
  const [guesses, setGuesses] = useState([]);
  const [solution, setSolution] = useState('aback');
  const [gridColors, setGridColors] = useState(Array(6).fill(Array(5).fill('#242424')))

  const ans = require('./word_database/wordle-answers-alphabetical.txt')
  const gus = require('./word_database/wordle-allowed-guesses.txt')

  


  useEffect(() => {
    document.title = 'Wordle Unlimited';

    fetch(ans)
    .then(response => response.text())
    .then(text => {
      let tempAnswers = text.split('\n');
      setSolution(tempAnswers[Math.floor(Math.random() * tempAnswers.length)])
      setAnswers(tempAnswers);
    })

  fetch(gus)
    .then(response => response.text())
    .then(text => {
      setGuesses(text.split('\n'));
    })

    
  }, [])

  const getRandAnswer = () => {
    return answers[Math.floor(Math.random() * answers.length)]
  }



  

  const handleKeyDown = (e) =>{
    if (e.keyCode >= 65 && e.keyCode <= 90 && progress[currLine].length < 5){ //check that it is a alpha char, and length is smaller than 5
      let progress_cpy = JSON.parse(JSON.stringify(progress)); //create deep copy
      progress_cpy[currLine].push(String.fromCharCode(e.keyCode));
      setProgress(progress_cpy); //set
    }

    else if (e.keyCode === 8){ //if backspace is pressed
      let progress_cpy = JSON.parse(JSON.stringify(progress)); //create deep copy
      progress_cpy[currLine].pop();
      setProgress(progress_cpy); //set
    }

    else if (e.keyCode === 13){ //Enter is pressed, check if valid then continue
      let submit = progress[currLine].join('').toLowerCase() //clean up the string that is being passed in
      console.log(solution)
      
      if((answers.includes(submit) || guesses.includes(submit)) && submit.length === 5){ //valid submission, now do checking
        setCurrLine(currLine+1);
      }
      else{
        console.log("Not a valid submission...")
        console.log(gridColors);
      }
      
    }
 
  }

  return (
    <div className="App" onKeyDown={(e) => handleKeyDown(e)} tabIndex="0"> 
      <Header/>

      <div className='header-break'></div>

      <Board progress={progress} gridColors={gridColors}/>
    </div>
  );
}

export default App;
