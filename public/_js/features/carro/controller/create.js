import Bottom from "../../../components/modal/bottom.js";
import ListCarro from "../list.js";
export default class CreateCarro {
    static execute(form) {
        console.log(form.model);
        ListCarro.list.list.push(form.model);
        Bottom.show();
    }
}
