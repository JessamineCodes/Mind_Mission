import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dropdown"
export default class extends Controller {
  static targets = ["detailsFirst", "detailsSecond", "detailsThird", "triangleFirstIcon", "triangleSecondIcon", "triangleThirdIcon"]

  connect() {
    console.log("dropdown controller connected")
  }

  openFirst() {
    console.log("1st level dropdown activated");
    this.detailsFirstTarget.classList.toggle("hidden")
    // Triangle rotation
    if (this.triangleFirstIconTarget.classList.contains("triangle-open")) {
      this.triangleFirstIconTarget.classList.remove("triangle-open")
      this.triangleFirstIconTarget.classList.add("triangle-closed")
    } else if (this.triangleFirstIconTarget.classList.contains("triangle-closed")) {
      this.triangleFirstIconTarget.classList.remove("triangle-closed")
      this.triangleFirstIconTarget.classList.add("triangle-open")
    } else {
      this.triangleFirstIconTarget.classList.add("triangle-open")
    }
  }

  openSecond() {
    console.log("2nd updated");
    this.detailsSecondTarget.classList.toggle("hidden")
        // Triangle rotation
    if (this.triangleSecondIconTarget.classList.contains("triangle-open")) {
      this.triangleSecondIconTarget.classList.remove("triangle-open")
      this.triangleSecondIconTarget.classList.add("triangle-closed")
    } else if (this.triangleSecondIconTarget.classList.contains("triangle-closed")) {
      this.triangleSecondIconTarget.classList.remove("triangle-closed")
      this.triangleSecondIconTarget.classList.add("triangle-open")
    } else {
      this.triangleSecondIconTarget.classList.add("triangle-open")
    }
  }

  openThird() {
    console.log("3rd updated");
    this.detailsThirdTarget.classList.toggle("hidden")
    // Triangle rotation
    if (this.triangleThirdIconTarget.classList.contains("triangle-open")) {
      this.triangleThirdIconTarget.classList.remove("triangle-open")
      this.triangleThirdIconTarget.classList.add("triangle-closed")
    } else if (this.triangleThirdIconTarget.classList.contains("triangle-closed")) {
      this.triangleThirdIconTarget.classList.remove("triangle-closed")
      this.triangleThirdIconTarget.classList.add("triangle-open")
    } else {
      this.triangleThirdIconTarget.classList.add("triangle-open")
    }
  }
}
