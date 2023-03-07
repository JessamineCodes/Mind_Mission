import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="rotate-dial"
export default class extends Controller {
  static targets = ["dial"]

  connect() {
    console.log(this.dialTarget)
  }

  rotate() {
    console.log(this.dialTarget)
    this.dialTarget.classList.add("rotation-animation")
    // this.dialTarget.style.transform = "rotate(144deg)";
    // this.dialTarget.style.transform = "rotate(144deg)";

  }
}
