import App from "../app.js";
import { Z } from "../ui/zeyo.js";
export default class Button {
    constructor() {
        this.main = new Z("button");
    }
    create(b) {
        return this.main = new Z("button").object(z => {
            z.element.innerText = b.text;
            z.element.onclick = () => {
                App.route.push(b.route);
            };
        });
    }
}
