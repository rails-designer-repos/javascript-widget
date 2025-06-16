export default class Container {
  render() {
    return [this.#form, this.#messages].join("")
  }

  // private

  get #form() {
    return `
      <form method="POST">
        <textarea name="message" placeholder="Type your message…"></textarea>

        <button type="sumbit">Send</button>
      </form>
    `
  }

  get #messages() {
    return `
      <ul id="messages"></ul>
    `
  }
}
