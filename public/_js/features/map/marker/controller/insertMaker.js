import App from "../../../../app.js";
import Modal from "../../../../components/modal/modal.js";
import Map from "../../map.js";
import FormUpdateMarker from "../form/update.js";
export default class Insert {
    static marker(marker) {
        const icon = {
            path: "m 24.936666,0.00627925 c -10.341182,0 -18.753843,8.10556685 -18.753843,18.07010875 0,3.303801 0.9376927,6.541453 2.7349356,9.398288 l 14.7399594,21.84896 c 0.290682,0.431338 0.778406,0.689838 1.297262,0.689838 0.520419,0 1.005089,-0.260062 1.294211,-0.689838 L 40.995254,27.416681 c 1.762862,-2.811513 2.695254,-6.04118 2.695254,-9.340293 0,-9.9645419 -8.412661,-18.07010875 -18.753842,-18.07010875 z m -0.0062,8.63214045 c 0.223175,0 0.43356,0.1105488 0.558585,0.2960809 l 6.3398,9.3982874 c 0.773047,1.22881 1.175168,2.620294 1.175168,4.041356 0,4.286041 -3.619405,7.774419 -8.067448,7.774419 -4.448047,1e-6 -8.064396,-3.488378 -8.064396,-7.774419 0,-1.419045 0.401646,-2.807621 1.159904,-4.016936 l 6.342852,-9.4227074 c 0.124361,-0.1848612 0.331686,-0.2960809 0.555535,-0.2960809 z",
            fillColor: "#ea4335",
            fillOpacity: 1,
            strokeWeight: 0,
            rotation: 0,
            scale: 1,
            anchor: new google.maps.Point(25, 50),
        };
        new google.maps.Marker({
            map: Map.map,
            title: marker.titulo,
            position: marker.latlng,
            optimized: false,
            icon: {
                url: "https://parceiro.com/_img/marker.svg",
                anchor: new google.maps.Point(25, 50),
                size: new google.maps.Size(50, 50)
            }
        }).addListener("click", () => {
            Map.map.setCenter(marker.latlng);
            Modal.show(new FormUpdateMarker(App.repository, marker));
        });
    }
}
