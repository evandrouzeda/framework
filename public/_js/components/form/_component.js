var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Fields from "./_list.js";
export default class ComponentForm {
    constructor(destino) {
        this.main = document.createElement("form");
        destino.appendChild(this.main);
    }
    create(form) {
        return __awaiter(this, void 0, void 0, function* () {
            const fields = yield form.getFields();
            const properties = {};
            for (const key in fields) {
                const field = Object.assign(new Fields.list[fields[key].type](), fields[key]);
                properties[key] = field;
                this.main.appendChild(field.getHtml());
            }
            const button = document.createElement("button");
            button.innerText = form.title;
            this.main.appendChild(button);
            this.main.onsubmit = e => {
                e.preventDefault();
                console.log("entrou");
                for (const key in fields) {
                    if (Object.prototype.hasOwnProperty.call(form.model, key))
                        form.model[key] = properties[key].getValue();
                }
                console.log(form);
            };
        });
    }
}
