import App from "../../../app.js";
import Bottom from "../../../components/modal/bottom.js";
import Form from "../../../core/entity/form.js";
import ListCarro from "../list.js";

export default class CreateCarro {
    static execute(form: Form){
        console.log(form.model)
        ListCarro.list.list.push(form.model)
        App.route.hash.remove()
    }
}