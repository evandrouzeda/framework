import ComponentForm from "../../../components/form/_component.js";
import RepositoryLocalStorage from "../../../core/repository/localStorage.js";
import FormLogin from "../form/login.js";
import StateLogin from "./login.js";
import FormState from "./_state.js";

export default class FormStore {
    static model: any
    static form = new Proxy(ComponentForm, {
        set: (target, key, value) => {
            if (key === "main")
                target.main.element.parentElement?.replaceChild(value.element, target.main.element);
            target[key as keyof typeof target] = value
            return true
        }
    })
    static state: FormState = new StateLogin()
    static changeState(transition: string) {
        const transitions: { [key: string]: () => [FormState, typeof FormLogin] } = {
            "esqueci": this.state.esqueci,
            "acao": this.state.acao,
        }
        const [state, form] = transitions[transition]()
        this.state = state
        this.form.create(new form(new RepositoryLocalStorage, this.model))
    }
}