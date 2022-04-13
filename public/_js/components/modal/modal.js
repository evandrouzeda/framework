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
import Bottom from "./bottom.js";
export default class Modal {
    static show(form) {
        return __awaiter(this, void 0, void 0, function* () {
            App.route.hash.push("modal");
            App.root.appendChild((yield this.modal.create(form)).element);
            App.route.hash.cb = () => {
                this.modal.main.element.remove();
            };
        });
    }
}
Modal.modal = new Bottom();
