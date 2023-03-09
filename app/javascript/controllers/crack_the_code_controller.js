import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="crack-the-code"
export default class extends Controller {
  static targets = ["reward"]

  connect() {
    const words = [
      {
        word: "APPLE",
        hint: "hint1"
      },
      {
        word: "BANANA",
        hint: "hint2"
      }
    ];

    const wordText = document.querySelector(".word"),
    hintText = document.querySelector(".hint span"),
    inputField = document.querySelector("#user-input"),
    solutionBtn = document.querySelector(".solution"),
    checkBtn = document.querySelector(".check");

    let correctWord;

    const initGame = () => {
      // get random object from words
      let randomObj = words[Math.floor(Math.random() * words.length)];
      let wordArray = randomObj.word.split("");
      for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
      }
      wordText.innerText = wordArray.join("");
      hintText.innerText = randomObj.hint;
      correctWord = randomObj.word.toLowerCase();
      inputField.value = "";
      inputField.setAttribute("maxlength", correctWord.length);
    }
    initGame();

    const checkWord = () => {
      let userWord = inputField.value.toLocaleLowerCase();
      if (!userWord) return alert("Please enter a word");
      if (userWord !== correctWord) return alert(`Oops! ${userWord} is not the correct word!`);
      alert(`Yay! ${userWord.toUpperCase()} is the correct word!`)
    }

    const showAnswer = () => {
      wordText.innerText = correctWord.toUpperCase();
    }

    solutionBtn.addEventListener("click", showAnswer);
    checkBtn.addEventListener("click", checkWord);
  }
}

// this.rewardTarget.style.display = "flex"
