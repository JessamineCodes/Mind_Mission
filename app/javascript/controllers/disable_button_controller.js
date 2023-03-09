import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="disable-button"
export default class extends Controller {
  static targets = ["button", "input", "reward"]

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
  }

  #checkInputs() {
    const emptyInputs = this.inputTargets.filter((input) => input.value === "");
    return emptyInputs;
  }
}
