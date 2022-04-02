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
            const fields = yield form.getFields();
            const properties = {};
            return this.main.addClass("d-grid", "gap-m").children(new Z("h2").object(e => e.element.innerText = form.title), ...Object.keys(fields).map(k => {
                properties[k] = Object.assign(Fields.list[fields[k].type], fields[k]);
                const z = properties[k].create();
                properties[k].setValue(form.model[k]);
                return z;
            }), new Z("button").object(e => e.element.innerText = form.action)).object(e => e.element.onsubmit = (e) => {
                e.preventDefault();
                for (const key in fields) {
                    if (Object.prototype.hasOwnProperty.call(form.model, key))
                        form.model[key] = properties[key].getValue();
                }
                console.log(form.model);
            });
        });
    }
}
ComponentForm.main = new Z("form");
