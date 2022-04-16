import Map from "../features/map/map.js";
import { Z } from "../ui/zeyo.js";
export default class ComponentMap {
    static create() {
        Map.init(this.main.element);
        return this.main.addClass("map");
    }
}
ComponentMap.main = new Z("div");
