import App from "../../../app.js";
import ListCarro from "../list.js";
export default class CreateCarro {
    static execute(form) {
        console.log(form.model);
        ListCarro.list.list.push(form.model);
        App.route.hash.remove();
    }
}
