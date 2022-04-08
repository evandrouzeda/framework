import Bottom from "../../../components/modal/bottom.js";
export default class UpdateCarro {
    static execute(form) {
        console.log(form.model);
        //ListEstacionamento.list.list.push(form.model)
        Bottom.show();
    }
}
