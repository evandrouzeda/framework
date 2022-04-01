export default class FormElement {
    constructor(type) {
        this.label = "";
        this.placeholder = "";
        this.element = document.createElement("input");
        this.type = type;
    }
    getValue() {
        return this.element.value;
    }
    setValue(value) {
        this.element.value = value;
    }
}
