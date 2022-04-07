import LoginOpt from "../../../components/form/loginOpt.js";
import StateLogin from "./login.js";
export default class FormStore {
    static changeState(transition) {
        const transitions = {
            "esqueci": this.state.esqueci,
            "acao": this.state.acao,
        };
        this.state = transitions[transition]();
        //this.form.create(new this.state.form(new RepositoryLocalStorage, this.model))
        console.log(this.state.texts);
        Object.assign(this.texts, this.state.texts);
        //this.opt.create(this.state.texts)
    }
}
/* static form = new Proxy(new ComponentForm(), {
    set: (target, key, value) => {
        if (key === "main")
            target.main.element.parentElement?.replaceChild(value.element, target.main.element);
        target[key as keyof typeof target] = value
        return true
    }
}) */
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
