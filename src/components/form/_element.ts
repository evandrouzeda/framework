export default abstract class FormElement {
    label = ""
    placeholder = ""
    element = document.createElement("input")
    type: string
    constructor(type: string) {
        this.type = type
    }
    abstract getHtml(): HTMLElement
    getValue() {
        return this.element.value
    }

    setValue(value: string) {
        this.element.value = value
    }
}