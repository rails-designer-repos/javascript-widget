import Container from "./widget/container.js"
import Messages from "./widget/messages.js"

class Widget {
  constructor(selector) {
    this.element = document.querySelector(selector)

    if (!this.element) {
      throw new Error(`[Widget] Element with selector "${selector}" not found`)
    }
  }

  init() {
    const container = new Container()
    this.element.innerHTML = container.render()

    new Messages(this.element).setupEvents()

    return this
  }
}

function initWidget(selector) {
  const widget = new Widget(selector)

  return widget.init()
}

window.initWidget = initWidget

if (window.WIDGET_CONFIG && window.WIDGET_CONFIG.selector) {
  initWidget(window.WIDGET_CONFIG.selector)
}

export { Widget }
