import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dropdown"
export default class extends Controller {
  static targets = ["detailsFirst", "detailsSecond", "detailsThird", "triangleIcon"]

  connect() {
    console.log("dropdown controller connected")
  }

  openFirst() {
    console.log("1st updated");
    this.detailsFirstTarget.classList.toggle("hidden")
    this.triangleIconTarget.classList.toggle("triangle-open")
  }

  openSecond() {
    console.log("2nd updated");
    this.detailsSecondTarget.classList.toggle("hidden")
  }

  openThird() {
    console.log("3rd updated");
    this.detailsThirdTarget.classList.toggle("hidden")
  }
}
