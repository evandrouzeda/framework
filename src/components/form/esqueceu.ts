import FormStore from "../../features/user/state/_store.js"
import { Z } from "../../ui/zeyo.js"
import FormElement from "./_element.js"

export default class Esqueci extends FormElement{
    constructor(){
        super("esqueci")
    }
    create(): Z {
        return new Z("p").addClass("pointer").object(z => {
            z.element.innerText = "Esqueci minha senha"
            z.element.style.textAlign = "right"
            z.element.onclick = e => {
                FormStore.changeState("esqueci")
                console.log("aqui tem que mudar o state do form");
            }
        })
    }
}