import Insert from "./marker/controller/insertMaker.js";
import Marker from "./marker/domain/marker.js";
export default class Map {
    static init(element) {
        const script = document.createElement('script');
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCVE4qf8oNqj2NEqf3ZaSxsKRvfSf_u82Y&libraries=places&callback=initMap';
        script.async = true;
        window.initMap = () => {
            const input = document.createElement("input");
            input.value = "São Paulo";
            this.map = new google.maps.Map(element, {
                center: {
                    lat: -28.263,
                    lng: -52.406
                },
                zoom: 15
            });
            console.log(new google.maps.places.Autocomplete(input));
            const PF = new Marker("Passo Fundo", {
                lat: -28.263,
                lng: -52.406
            });
            Insert.marker(PF);
            this.map.addListener("zoom_changed", showBounds);
            this.map.addListener("dragend", showBounds);
            function showBounds() {
                var _a;
                console.log((_a = Map.map.getBounds()) === null || _a === void 0 ? void 0 : _a.toJSON());
            }
        };
        document.head.appendChild(script);
    }
}
