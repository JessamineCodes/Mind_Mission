import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="crack-the-code"
export default class extends Controller {
  static targets = ["reward", "word", "hint", "input", "round"]

  connect() {
    this.correctWord = this.#initGame();
    this.round = 1;
  }

  showAnswer() {
    this.wordTarget.innerText = this.correctWord.toUpperCase();
  }

  checkWord() {
    let userWord = this.inputTarget.value.toLocaleLowerCase();
    if (!userWord) {
      alert("Please enter a word");
    } else if (userWord !== this.correctWord) {
      alert(`Oops! ${userWord} is not the correct word!`);
    } else {
      alert ("You guessed right!");
    }
    // if (userWord !== this.correctWord) return alert(`Oops! ${userWord} is not the correct word!`);
    // if (userWord === this.correctWord) return alert ("You guessed right!");
    this.round++;
    if (this.round <= 3) {
      this.roundTarget.innerText = this.round;
      this.correctWord = this.#initGame();
      console.log(this.correctWord);
    } else {
      this.rewardTarget.style.display = "flex"
    }
      // alert(`Yay! ${userWord.toUpperCase()} is the correct word!`)
  }

  #initGame() {
    const words = [
      {
        word: "INTELLIGENCE",
        hint: "secret information gathered by spies"
      },
      {
        word: "FINGERPRINT",
        hint: "the pattern you leave behind on a surface after touching it"
      },
      {
        word: "ESPIONAGE",
        hint: "another word for spying - rhymes with 'camouflage'"
      }
    ];
    // get random object from words
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    this.wordTarget.innerText = wordArray.join("");
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
