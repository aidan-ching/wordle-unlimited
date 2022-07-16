import raw from './word_database/wordle-allowed-guesses.txt'

fetch(raw)
  .then(r => r.text())
  .then(text => {
    console.log('text decoded:', text);
  });