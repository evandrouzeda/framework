import Page from "./pages/page.js";
import Route from "./router/_route.js";

export default class App {
    static pages: Page[] = []
    static root: HTMLElement = document.querySelector("#root")!
    static route = Route
    static init(){
        this.route.init()
    }
}