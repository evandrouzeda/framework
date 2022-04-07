import App from "../../app.js"
import Form from "../../core/entity/form.js"
import { Z } from "../../ui/zeyo.js"
import ComponentForm from "../form/_component.js"
import Component from "../_component.js"

export default class Bottom implements Component {
    main = new Z("div")
    async create(form: Form) {
        return this.main = new Z("div").addClass("modal-container").children(
            new Z("div").addClass("modal", "d-grid").children(
                await new ComponentForm().create(form)
            )
        ).object(z => z.element.onclick = e => {
            if (e.target === z.element)
                Bottom.show()
        })
    }

    static showing = false
    static modal = new Bottom()
    static async show(form?: Form) {
        if (form){
            window.location.hash = "modal"
            App.root.appendChild((await this.modal.create(form!)).element)
        } else{
            //window.history.replaceState("", document.title, window.location.pathname)
            //if(window.location.hash.length > 1) window.history.back()
            this.modal.main.element.remove()
        }
    }
}