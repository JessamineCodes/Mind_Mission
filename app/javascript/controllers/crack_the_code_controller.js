import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="crack-the-code"
export default class extends Controller {
  static targets = ["reward", "word", "hint", "input", "round", "alert", "alertText", "box"]

  connect() {
    this.round = 1;
    this.correctWord = this.#initGame();
  }

  showAnswer() {
    this.boxTarget.innerText = ""
    for (let i = 0; i < this.correctWord.length; i++) {
      const div = document.createElement("div");
      div.classList.add("letter")
      div.textContent = this.correctWord[i].toUpperCase()
      this.boxTarget.appendChild(div)
    }
  }

  checkWord() {

    const gameSound = document.querySelector("#gameSound");
    gameSound.play;

    const correctImage = document.querySelector("#correct")
    const wrongImage = document.querySelector("#wrong")
    const tryAgainImage = document.querySelector("#try-again")

    if (!correctImage.classList.contains("hide-me")) {
      correctImage.classList.add("hide-me")
    }
    if (!wrongImage.classList.contains("hide-me")) {
      wrongImage.classList.add("hide-me")
    }
    if (!tryAgainImage.classList.contains("hide-me")) {
      tryAgainImage.classList.add("hide-me")
    }

    // console.log(correctImage)

    let userWord = this.inputTarget.value.toLocaleLowerCase();
    if (!userWord) {
      this.alertTextTarget.innerText = "Oops! Please enter a word"
      this.alertTarget.style.display = "block"
      wrongImage.classList.remove("hide-me")
    } else if (userWord !== this.correctWord) {
      this.alertTextTarget.innerText = `Try again! "${userWord}" is not correct!`
      this.alertTarget.style.display = "block"
      tryAgainImage.classList.remove("hide-me")
    } else {
      this.alertTextTarget.innerText = `Great job! "${userWord}" is correct!`
      this.alertTarget.style.display = "block"
      correctImage.classList.remove("hide-me")
      // this.alertTarget.insertAdjacentElement("beforebegin", correctImage)
      this.round++;
      if (this.round <= 3) {
        this.roundTarget.innerText = this.round;
        this.correctWord = this.#initGame();
      } else {
        this.rewardTarget.style.display = "flex"
      }
    }
    // if (userWord !== this.correctWord) return alert(`Oops! ${userWord} is not the correct word!`);
    // if (userWord === this.correctWord) return alert ("You guessed right!");
      // alert(`Yay! ${userWord.toUpperCase()} is the correct word!`)
  }

  checkWordEnter(e) {
    e.preventDefault();
    this.checkWord();
  }

  closeAlert() {
    this.alertTarget.style.display = "none";
  }

  #initGame() {
    const words = [
      {
        word: "STAKEOUT",
        hint: "secretly watching a place or person to gather information"
      },
      {
        word: "SECRETS",
        hint: "knowledge that should not be known by others"
      },
      {
        word: "ESPIONAGE",
        hint: "another word for spying - rhymes with 'camouflage'"
      }
    ];
    // get random object from words
    // let randomObj = words[Math.floor(Math.random() * words.length)];
    let randomObj;
    if (this.round === 1) {
      randomObj = words[0]
    } else if (this.round === 2) {
      randomObj = words[1]
    } else {
      randomObj = words[2]
    }
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }

    this.boxTarget.innerText = ""
    for (let i = 0; i < wordArray.length; i++) {
      const div = document.createElement("div");
      div.classList.add("letter")
      div.textContent = wordArray[i]
      this.boxTarget.appendChild(div)
    }

    // this.wordTarget.innerText = wordArray.join("");
    this.hintTarget.innerText = randomObj.hint;
    let correctWord = randomObj.word.toLowerCase();
    this.inputTarget.value = "";
    this.inputTarget.setAttribute("maxlength", correctWord.length);
    return correctWord;
  }
}

  // const cheatGame = () => {
  //   console.log("Cheat button connected")
  //   this.rewardTarget.style.display = "flex"
  // }

  // cheatBtn.addEventListener("click", cheatGame);
  // solutionBtn.addEventListener("click", showAnswer);
  // checkBtn.addEventListener("click", checkWord);
