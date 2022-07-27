import React, { useState, useEffect } from 'react'
import Header from './Header';
import Board from './Board';
import Keyboard from './Keyboard';
import ModalInterior from './ModalInterior';

import Modal from 'react-modal';
import { useTimer } from 'use-timer';



Modal.setAppElement('#root'); //have to set for modal

const modalStyle = {  //modal styles
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay:{
    background: '#2b2b2b',
    opacity: '0.95',
  }
};

function App() {
  const darkgrey = "#242424"
  const yellow = "#9e970b"
  const green = "green"

  const [progress, setProgress] = useState(Array(6).fill(Array(0))); //this is this hook for the input that the user puts in 
  const [currLine, setCurrLine] = useState(0); //this is the line that the game is in currently
  const [answers, setAnswers] = useState([]);
  const [guesses, setGuesses] = useState([]);
  const [solution, setSolution] = useState('aback'); //defalt solution if getting a random one does not work
  const [gridColors, setGridColors] = useState(Array(6).fill(Array(5).fill(darkgrey)));
  const [discovered, setDiscovered] = useState([]);
  const [yellowLetters, setYellowLetters] = useState([]);
  const [greenLetters, setGreenLetters] = useState([]);
  const [validWord, setValidWord] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const ans = require('./word_database/wordle-answers-alphabetical.txt')
  const gus = require('./word_database/wordle-allowed-guesses.txt')

  const { time, start, pause, reset, status } = useTimer();
  

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

  function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

  const charInputHelper = (char) =>{
    if (currLine === 0 && progress[currLine].length === 0){
      start();
    }


    if (progress[currLine].length < 5){ //check for correct length
      let progress_cpy = JSON.parse(JSON.stringify(progress)); //create deep copy
      progress_cpy[currLine].push(char);
      if (progress_cpy[currLine].length === 5){
        let submit = progress_cpy[currLine].join('').toLowerCase();
        if (answers.includes(submit) || guesses.includes(submit)){
          setValidWord(true);
        }
      }
      setProgress(progress_cpy);
    }
  }

  const delHelper = () =>{
    let progress_cpy = JSON.parse(JSON.stringify(progress)); //create deep copy
    progress_cpy[currLine].pop();
    setProgress(progress_cpy); //set
    setValidWord(false);
  }

  const submitHelper = () =>{
    let submit = progress[currLine].join('').toLowerCase() //clean up the string that is being passed in
    
    if((answers.includes(submit) || guesses.includes(submit)) && submit.length === 5){ //valid submission, now do checking
      let gridColors_cpy = JSON.parse(JSON.stringify(gridColors)); //create deep copy
      let solution_cpy = solution;

      for(let i = 0; i < submit.length; ++i){
        if (submit[i] === solution_cpy[i]){ //exact match
          gridColors_cpy[currLine][i] = green;
          solution_cpy = setCharAt(solution_cpy, i, "_")
        }
      }

      for (let i = 0; i < submit.length; ++i){
        if (solution_cpy.indexOf(submit[i]) !== -1 && gridColors_cpy[currLine][i] !== 'green'){
          gridColors_cpy[currLine][i] = yellow;
          solution_cpy = setCharAt(solution_cpy, solution_cpy.indexOf(submit[i]), "_")
        }
      }


      //check for what to color the keyboard
      //first create copies of each of the three arrays
      let discovered_cpy = JSON.parse(JSON.stringify(discovered));
      let yellowLetters_cpy = JSON.parse(JSON.stringify(yellowLetters));
      let greenLetters_cpy = JSON.parse(JSON.stringify(greenLetters));

      for (let i = 0; i < gridColors_cpy[currLine].length; ++i){
        if (gridColors_cpy[currLine][i] === darkgrey){
          discovered_cpy.push(submit[i].toUpperCase());
        }

        else if (gridColors_cpy[currLine][i] === yellow){
          yellowLetters_cpy.push(submit[i].toUpperCase());
        }

        else if (gridColors_cpy[currLine][i] === green){
          greenLetters_cpy.push(submit[i].toUpperCase());
        }
      }

      //then set everything at the end

      setDiscovered(discovered_cpy);
      setYellowLetters(yellowLetters_cpy);
      setGreenLetters(greenLetters_cpy);
      setGridColors(gridColors_cpy);
      setCurrLine(currLine+1);
      setValidWord(false);


      //now check if its correct or incorrect
      if (submit === solution){
        //win! open modal and pause the timer
        openModal();
        pause();
        setGameOver(true);
      }
      //if we used up all the tries
      else if (currLine === 5){
        openModal();
        pause();
        setGameOver(true);
      }
      
    }
  }

  const handleKeyDown = (e) =>{
    if (e.keyCode >= 65 && e.keyCode <= 90 && !modalOpen && !gameOver){ //check that it is a alpha char
      charInputHelper(String.fromCharCode(e.keyCode));
    }

    else if (e.keyCode === 8 && !modalOpen && !gameOver) { //if backspace is pressed
      delHelper();
    }

    else if (e.keyCode === 13 && !modalOpen && !gameOver){ //Enter is pressed, check if valid then continue
      submitHelper();
    }

    else if (e.keyCode === 27 && modalOpen){
      closeModal();
    }
  }

  const handleKeyboardPress = (e) =>{
    charInputHelper(e.target.innerText);
  }

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  const handleReset = () =>{
    //generate a new random answer
    setSolution(getRandAnswer());
    //clear playing board
    setProgress(Array(6).fill(Array(0)))
    //reset current line to 0
    setCurrLine(0);
    //reset grid colors
    setGridColors(Array(6).fill(Array(5).fill(darkgrey)));
    //reset keyboard colors
    setDiscovered([]);
    setYellowLetters([]);
    setGreenLetters([]);
    //turn off modal
    setModalOpen(false);
    //stop timer and reset the time
    pause();
    reset();
    //change game over
    setGameOver(false);
  }

  function getTime(time){
    let minutes = Math.floor(time/60);
    let seconds = ((time % 60)).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }



  return (
    <div className="App" onKeyDown={(e) => handleKeyDown(e)} tabIndex="0"> 
      <Header handleReset={handleReset} time={getTime(time)}/>
      

      <Board progress={progress} gridColors={gridColors} validWord={validWord} currLine={currLine}/>

      <Keyboard keyPress={handleKeyboardPress} del={delHelper} submit={submitHelper} discovered={discovered} yellowLetters={yellowLetters} greenLetters={greenLetters}/>

      <Modal isOpen={modalOpen} style={modalStyle}>
        <ModalInterior close={closeModal} solution={solution} currLine={currLine} handleReset={handleReset} time={getTime(time)}/>
      </Modal>
    </div>
  );
}

export default App;
