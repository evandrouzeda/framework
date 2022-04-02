var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Z } from "../../ui/zeyo.js";
import Fields from "./_list.js";
export default class ComponentForm {
    static create(form) {
        return __awaiter(this, void 0, void 0, function* () {
            this.form = form;
            this.properties = {};
            this.fields = yield this.form.getFields();
            console.log(this.fields);
            return this.main = new Z("form").addClass("d-grid", "gap-m").children(new Z("h2").object(e => e.element.innerText = this.form.title), ...Object.keys(this.fields).map(k => {
                this.properties[k] = Object.assign(new Fields.list[this.fields[k].type](), this.fields[k]);
                const z = this.properties[k].create();
                this.properties[k].setValue(this.form.model[k]);
                return z;
            }), new Z("button").object(e => e.element.innerText = this.form.action)).object(this.submit.bind(this));
        });
    }
    static submit(e) {
        e.element.onsubmit = e => {
            e.preventDefault();
            console.log(this);
            for (const key in this.fields) {
                if (Object.prototype.hasOwnProperty.call(this.form.model, key)) {
                    console.log(this.properties[key].element.element);
                    this.form.model[key] = this.properties[key].getValue();
                }
            }
            console.log(this.form);
            //TODO: aqui tem que chamar o controller
            //App.route.push("/estacionamento")
        };
    }
}
ComponentForm.main = new Z("form");
ComponentForm.properties = {};
