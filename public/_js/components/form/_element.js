import { Z } from "../../ui/zeyo.js";
export default class FormElement {
    constructor(type) {
        this.label = "";
        this.placeholder = "";
        this.element = new Z("input");
        this.type = type;
    }
    getValue() {
        const e = this.element.element;
        return e.value;
    }
    setValue(value) {
        this.element.atrib("value", value);
    }
}
