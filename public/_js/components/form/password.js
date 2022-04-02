import { Z } from "../../ui/zeyo.js";
import FormElement from "./_element.js";
export default class Password extends FormElement {
    constructor() {
        super("text");
    }
    create() {
        this.element.atrib("type", this.type).atrib("placeholder", this.placeholder);
        return new Z("div").addClass("d-grid", "gap-p").children(new Z("label").object(e => e.element.innerText = this.label), this.element);
    }
}
