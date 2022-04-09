import App from "../../../app.js";
export default class UpdateCarro {
    static execute(form) {
        console.log(form.model);
        //ListEstacionamento.list.list.push(form.model)
        App.route.hash.remove();
    }
}
