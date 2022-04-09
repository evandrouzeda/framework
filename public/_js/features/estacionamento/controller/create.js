import App from "../../../app.js";
import ListEstacionamento from "../list.js";
export default class Create {
    static execute(form) {
        console.log(form.model);
        ListEstacionamento.list.list.push(form.model);
        App.route.hash.remove();
    }
}
