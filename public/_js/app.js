import Route from "./router/_route.js";
export default class App {
    static init() {
        this.route.init();
    }
}
App.pages = [];
App.root = document.querySelector("#root");
App.route = Route;
