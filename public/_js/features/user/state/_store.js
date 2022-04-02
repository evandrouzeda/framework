import ComponentForm from "../../../components/form/_component.js";
import RepositoryLocalStorage from "../../../core/repository/localStorage.js";
import StateLogin from "./login.js";
export default class FormStore {
    static changeState(transition) {
        const transitions = {
            "esqueci": this.state.esqueci,
            "acao": this.state.acao,
        };
        const [state, form] = transitions[transition]();
        this.state = state;
        this.form.create(new form(new RepositoryLocalStorage, this.model));
    }
}
FormStore.form = new Proxy(ComponentForm, {
    set: (target, key, value) => {
        var _a;
        if (key === "main")
            (_a = target.main.element.parentElement) === null || _a === void 0 ? void 0 : _a.replaceChild(value.element, target.main.element);
        target[key] = value;
        return true;
    }
});
FormStore.state = new StateLogin();
