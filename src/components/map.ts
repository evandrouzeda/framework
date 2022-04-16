import Map from "../features/map/map.js";
import { Zeyo } from "../ui/lib.js";
import { Z } from "../ui/zeyo.js";
declare global {
    interface Window {
        initMap: () => void;
    }
}
export default class ComponentMap {
    static main = new Z("div")
    static create(): Zeyo | Promise<Zeyo> {
        Map.init(this.main.element)
        return this.main.addClass("map")
    }

}