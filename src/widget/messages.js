export default class Messages {
  constructor(containerElement) {
    this.container = containerElement
  }

  setupEvents() {
    this.#form.addEventListener("submit", (event) => this.#create(event))
  }

  // private

  #create(event) {
    event.preventDefault()

    const textarea = this.#form.querySelector("textarea")
    const text = textarea.value.trim()
    const message = document.createElement("li")

    message.textContent = text
    textarea.value = ""

    this.#messages.appendChild(message)
    this.#messages.scrollTop = this.#messages.scrollHeight
  }

  get #messages() {
    return this.container.querySelector("#messages")
  }

  get #form() {
    return this.container.querySelector("form")
  }
}
