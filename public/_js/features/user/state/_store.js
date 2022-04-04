import LoginOpt from "../../../components/form/loginOpt.js";
import ComponentForm from "../../../components/form/_component.js";
import RepositoryLocalStorage from "../../../core/repository/localStorage.js";
import StateLogin from "./login.js";
export default class FormStore {
    static changeState(transition) {
        const transitions = {
            "esqueci": this.state.esqueci,
            "acao": this.state.acao,
        };
        this.state = transitions[transition]();
        this.form.create(new this.state.form(new RepositoryLocalStorage, this.model));
        console.log(this.state.texts);
        Object.assign(this.texts, this.state.texts);
        //this.opt.create(this.state.texts)
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
FormStore.opt = new Proxy(new LoginOpt(), {
    set: (target, key, value) => {
        var _a;
        if (key === "main")
            (_a = target.main.element.parentElement) === null || _a === void 0 ? void 0 : _a.replaceChild(value.element, target.main.element);
        target[key] = value;
        return true;
    }
});
FormStore.state = new StateLogin();
FormStore.texts = new Proxy({
    pergunta: "Não possui uma conta?",
    acao: "Crie sua conta"
}, {
    set: (target, key, value) => {
        console.log(key, value);
        target[key] = value;
        FormStore.opt.create(target);
        return true;
    }
});
