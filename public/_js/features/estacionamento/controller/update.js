import App from "../../../app.js";
export default class Update {
    static execute(form) {
        console.log(form.model);
        //ListEstacionamento.list.list.push(form.model)
        App.route.hash.remove();
    }
}
