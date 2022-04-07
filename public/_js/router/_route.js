import Bottom from "../components/modal/bottom.js";
import Hash from "./hash/_hash.js";
import Push from "./push.js";
export default class Route extends Push {
    static init() {
        this.build(window.location.pathname);
        window.onpopstate = e => {
            console.log("event");
            e.preventDefault();
            if (this.hash.on) {
                this.hash.on = false;
                Bottom.show();
            }
            else
                this.build(window.location.pathname);
        };
        window.onhashchange = e => {
            if (e.newURL.split("#").length > 1)
                this.hash.on = true;
        };
    }
}
Route.hash = Hash;
