import AppLayout from "../components/layouts/app.js";
import { Zeyo } from "../ui/lib.js";
import { Z } from "../ui/zeyo.js";
import Page from "./page.js";
interface MapWindow extends Window {
    initMap(map: any): void;
}
declare let window: MapWindow;
export default class Map implements Page {
    route = "/map";
    title = "Map";
    main = new Z("div");
    async create() {
        const mapElement = new Z("div")
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
            console.log(map)
        };

        // Append the 'script' element to 'head'
        document.head.appendChild(script);

        return this.main = AppLayout.inner(
            new Z("div").children(
                mapElement
            )
        )
    }

}