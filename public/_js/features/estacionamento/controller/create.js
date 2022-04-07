import Bottom from "../../../components/modal/bottom.js";
import ListEstacionamento from "../list.js";
export default class Create {
    static execute(form) {
        console.log(form.model);
        ListEstacionamento.list.list.push(form.model);
        Bottom.show();
    }
}
