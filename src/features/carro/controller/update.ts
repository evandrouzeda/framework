import Bottom from "../../../components/modal/bottom.js";
import Form from "../../../core/entity/form.js";

export default class UpdateCarro {
    static execute(form: Form){
        console.log(form.model)
        //ListEstacionamento.list.list.push(form.model)
        Bottom.show()
    }
}