import Bottom from "../../../components/modal/bottom.js";
import Form from "../../../core/entity/form.js";
import ListEstacionamento from "../list.js";

export default class Update {
    static execute(form: Form){
        console.log(form.model)
        //ListEstacionamento.list.list.push(form.model)
        Bottom.show()
    }
}