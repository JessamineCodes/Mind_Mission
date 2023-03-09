import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="disable-button"
export default class extends Controller {
  static targets = ["button", "input"]


  enableButton(event) {
    if(this.#checkInputs().length === 0)  {
      this.buttonTarget.removeAttribute("disabled")
    }
  }

  #checkInputs() {
    const emptyInputs = this.inputTargets.filter((input) => input.value === "");
    return emptyInputs;
  }
}
