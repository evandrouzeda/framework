import App from "../../../app.js";
import Form from "../../../core/entity/form.js";
import ListEstacionamento from "../list.js";

export default class Create {
    static execute(form: Form){
        console.log(form.model)
        ListEstacionamento.list.list.push(form.model)
        App.route.hash.remove()
    }
}