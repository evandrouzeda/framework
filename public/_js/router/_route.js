import Push from "./push.js";
export default class Route extends Push {
    static init() {
        this.build(window.location.pathname);
        window.onpopstate = e => {
            e.preventDefault();
            this.build(window.location.pathname);
        };
    }
}
