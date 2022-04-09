var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import App from "../../app.js";
import { Z } from "../../ui/zeyo.js";
import ComponentForm from "../form/_component.js";
export default class Bottom {
    constructor() {
        this.main = new Z("div");
    }
    create(form) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.main = new Z("div").addClass("modal-container").children(new Z("div").addClass("modal", "d-grid").children(yield new ComponentForm().create(form))).object(z => z.element.onclick = e => {
                if (e.target === z.element)
                    App.route.hash.remove();
            });
        });
    }
    static show(form) {
        return __awaiter(this, void 0, void 0, function* () {
            if (form) {
                window.location.hash = "modal";
                App.root.appendChild((yield this.modal.create(form)).element);
            }
            else {
                //window.history.replaceState("", document.title, window.location.pathname)
                //if(window.location.hash.length > 1) window.history.back()
                this.modal.main.element.remove();
            }
        });
    }
}
Bottom.showing = false;
Bottom.modal = new Bottom();
