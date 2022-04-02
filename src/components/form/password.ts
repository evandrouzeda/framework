import { Z } from "../../ui/zeyo.js"
import FormElement from "./_element.js"
import Fields from "./_list.js"

export default class Password extends FormElement {
    extra: string[] = []
    constructor() {
        super("text")
    }
    create(): Z {
        this.element.atrib("type", this.type).atrib("placeholder", this.placeholder)
        return new Z("div").addClass("d-grid", "gap-p").children(
            new Z("label").object(e => e.element.innerText = this.label),
            this.element,
            //TODO: tem que criar um campo extra para criar mais opcoes no campo
            ...this.extra.map(k =>{ return Fields.list[k].create() })
        )
    }
}