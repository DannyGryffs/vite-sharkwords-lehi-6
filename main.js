import './style.css';
import getRandomWord from './src/randomWord.js';
import { setSharkImage } from './src/sharkImage.js';
import { setupWord } from './src/word.js';
import { isLetterInWord } from './src/word.js';
import { revealLetterInWord } from './src/word.js';


document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;

const initSharkwords = () => {
  const word = getRandomWord();
  let numWrong = 0;
  setSharkImage(document.querySelector('#shark-img'), numWrong);
  setupWord(document.querySelector('#word-container'), word);
  
  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);
};

initSharkwords();
