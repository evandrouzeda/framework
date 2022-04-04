import LoginOpt from "../../../components/form/loginOpt.js";
import ComponentForm from "../../../components/form/_component.js";
import RepositoryLocalStorage from "../../../core/repository/localStorage.js";
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
    static opt = new Proxy(new LoginOpt(), {
        set: (target, key, value) => {
            if (key === "main")
                target.main.element.parentElement?.replaceChild(value.element, target.main.element);
            target[key as keyof typeof target] = value
            return true
        }
    })
    static state: FormState = new StateLogin()
    static texts: {pergunta: string; acao: string} = new Proxy({
        pergunta: "Não possui uma conta?",
        acao: "Crie sua conta"
    }, {
        set: (target, key, value) => {
            console.log(key, value)
            target[key as keyof typeof target] = value
            FormStore.opt.create(target)
            return true
        }
    })
    static changeState(transition: string) {
        const transitions: { [key: string]: () => FormState } = {
            "esqueci": this.state.esqueci,
            "acao": this.state.acao,
        }
        this.state = transitions[transition]()
        this.form.create(new this.state.form(new RepositoryLocalStorage, this.model))
        console.log(this.state.texts)
        Object.assign(this.texts, this.state.texts)
        //this.opt.create(this.state.texts)
    }
}