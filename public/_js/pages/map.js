var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import AppLayout from "../components/layouts/app.js";
import { Z } from "../ui/zeyo.js";
export default class Map {
    constructor() {
        this.route = "/map";
        this.title = "Map";
        this.main = new Z("div");
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            const mapElement = new Z("div");
            const script = document.createElement('script');
            script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAUctz1PjGwxU9qedx868CLxAGEhhJhLRU&callback=initMap';
            script.async = true;
            window.initMap = function () {
                const map = new google.maps.Map(mapElement.element, {
                    center: {
                        lat: -28.263,
                        lng: -52.406
                    },
                    zoom: 13
                });
                console.log(map);
            };
            // Append the 'script' element to 'head'
            document.head.appendChild(script);
            return this.main = AppLayout.inner(new Z("div").children(mapElement));
        });
    }
}
