import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="crack-the-code"
export default class extends Controller {
  connect() {
    console.log("Connected to crack_the_code")
  }
  changeColor() {
    console.log("Connected to change color action")
  }
}
