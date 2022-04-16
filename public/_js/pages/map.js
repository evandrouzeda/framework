var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import App from "../app.js";
import ComponentMap from "../components/map.js";
import Modal from "../components/modal/modal.js";
import Marker from "../features/map/marker/domain/marker.js";
import FormCreateMarker from "../features/map/marker/form/create.js";
import { Z } from "../ui/zeyo.js";
export default class Map {
    constructor() {
        this.route = "/map";
        this.title = "Map";
        this.main = new Z("div");
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.main = new Z("div").addClass("main", 'd-grid', 'gap-m').children(new Z("h1").text("LiberAqua"), yield ComponentMap.create(), new Z("button").text("Adicionar").addClass("add").click(e => {
                Modal.show(new FormCreateMarker(App.repository, new Marker()));
            }));
        });
    }
}
