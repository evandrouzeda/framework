import App from "../../app.js";
import Form from "../../core/entity/form.js";
import Bottom from "./bottom.js";

export default class Modal {
    static modal = new Bottom()
    static async show(form: Form){
        App.route.hash.push("modal")
        App.root.appendChild((await this.modal.create(form)).element)

        App.route.hash.cb = () => {
            this.modal.main.element.remove()
        }
    }
}