import App from "../app.js";
import { Z } from "../ui/zeyo.js";
import Component from "./_component.js";

export default class Button implements Component{
    main = new Z("button")
    create(b: {text: string, route: string}){

        return this.main = new Z("button").object(z => {
            z.element.innerText = b.text
            z.element.onclick = () => {
                App.route.push(b.route)
            }
        })
    }
}