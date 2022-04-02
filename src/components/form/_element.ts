import Component from "../../component.js"
import { Z } from "../../ui/zeyo.js"

export default abstract class FormElement implements Component{
    label = ""
    placeholder = ""
    element = new Z("input")
    type: string
    constructor(type: string) {
        this.type = type
    }
    abstract create(): Z
    getValue() {
        const e: any = this.element.element
        return e.value
    }

    setValue(value: string) {
        this.element.atrib("value", value)
    }
}