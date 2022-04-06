import App from "../../app";
import { Z } from "../../ui/zeyo";
export default class Botton {
    constructor() {
        this.main = new Z("button");
    }
    create(b) {
        return this.main = new Z("div").object(z => {
            z.element.innerText = b.text;
            z.element.onclick = () => {
                App.route.push(b.route);
            };
        });
    }
}
