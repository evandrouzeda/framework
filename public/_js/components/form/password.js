import { Z } from "../../ui/zeyo.js";
import FormElement from "./_element.js";
export default class Password extends FormElement {
    constructor() {
        super("text");
    }
    create() {
        this.element.atrib("type", this.type).atrib("placeholder", this.placeholder);
        return new Z("div").addClass("d-grid", "gap-p").children(new Z("label").object(e => e.element.innerText = this.label), this.element, 
        //TODO: tem que criar um campo extra para criar mais opcoes no campo
        new Z("p").object(z => {
            z.element.innerText = "Esqueci minha senha";
            z.element.style.textAlign = "right";
        }));
    }
}
