var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Z } from "../ui/zeyo.js";
import Watch from "./_watch.js";
export default class ListaHorizontal {
    constructor(component) {
        this.main = new Z("div");
        this.component = component;
    }
    create(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.main = new Z("div").children(new Z("h2").text(obj.title), ...(yield Promise.all(obj.list.map((e) => __awaiter(this, void 0, void 0, function* () {
                const [es, c] = Watch(e, new this.component(obj.adapter));
                return yield c.create(es);
            })))));
        });
    }
}
