var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import FormStore from "../../features/user/state/_store.js";
import { Z } from "../../ui/zeyo.js";
export default class LoginOpt {
    constructor() {
        this.main = new Z("p");
    }
    create(texts) {
        return this.main = new Z("p").object(z => z.element.innerText = `${texts.pergunta} `).children(new Z("b").addClass("pointer").object(z => {
            z.element.innerText = `${texts.acao}`;
            z.element.style.textDecoration = "underline";
            z.element.onclick = () => __awaiter(this, void 0, void 0, function* () { return FormStore.changeState("acao"); });
        }));
    }
}
