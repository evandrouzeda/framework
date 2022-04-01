import FormElement from "./_element.js"

export default class Password extends FormElement {
    constructor() {
        super("text")
    }
    getHtml() {
        const div = document.createElement("div")
        const label = document.createElement("label")
        label.innerText = this.label
        div.appendChild(label)
        this.element.type = this.type
        this.element.placeholder = this.placeholder
        div.classList.add("d-grid", "gap-p")
        div.appendChild(this.element)
        return div
    }
}