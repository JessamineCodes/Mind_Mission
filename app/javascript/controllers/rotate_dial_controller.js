import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="rotate-dial"
export default class extends Controller {
  static targets = ["dial", "button", "reward"]

  connect() {
    console.log(this.dialTarget)
    console.log(this.buttonTarget)
  }

  rotate() {
    console.log(this.dialTarget)

    this.dialTarget.classList.add("rotation-animation")
    this.buttonTarget.classList.remove("button")
    this.buttonTarget.classList.add("disabled-button")
    this.dialTarget.addEventListener("animationend", (event) => {
      console.log("Animation finished")
      this.rewardTarget.style.display = "flex"})

    // this.dialTarget.style.transform = "rotate(144deg)";
    // this.dialTarget.style.transform = "rotate(144deg)";
  }

}
