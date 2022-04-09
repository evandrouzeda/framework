import App from "../../app.js"
import Bottom from "../../components/modal/bottom.js"
import Form from "../../core/entity/form.js"

export default class Push {
    static modal = new Bottom()
    static async push(hash: string, form: Form){
        window.location.hash = hash
        App.root.appendChild((await this.modal.create(form)).element)
    }
}