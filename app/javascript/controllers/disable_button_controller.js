import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="disable-button"
export default class extends Controller {
  static targets = ["button", "input", "reward", "form"]

  connect() {
    console.log("Controller connected")
  }

  enableButton(event) {
    if(this.#checkInputs().length === 0)  {
      this.buttonTarget.removeAttribute("disabled")
    }
  }

  openReward(event) {
    event.preventDefault();
    console.log("Open reward function working");
    this.rewardTarget.style.display = "flex"
    const rewardSound = document.querySelector("#rewardSound")
    rewardSound.play()
  }

  nextSound(event) {
    event.preventDefault();
    let path = this.formTarget.action
    // const formHref = event.action;
    // console.log(formHref);

    // const formUrl = this.dataset.challengeUrl;
    // console.log(formUrl);

    // console.log(event.target.href)

    // const formHead = document.querySelector(".challenge-form-head")
    // console.log(formHead);

    // const formHref = formHead.getAttribute("href")
    // console.log(formHref);

    const nextSound = document.querySelector("#nextSound")
    nextSound.addEventListener('ended', function(){
          window.location.href = path;
    })
    nextSound.play()
  }

  #checkInputs() {
    const emptyInputs = this.inputTargets.filter((input) => input.value === "");
    return emptyInputs;
  }
}
