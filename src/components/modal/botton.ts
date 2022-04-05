import App from "../../app"
import { Z } from "../../ui/zeyo"
import Component from "../_component"

export default class Botton implements Component{
    main = new Z("button")
    create(b: {text: string, route: string}){

        return this.main = new Z("div").object(z => {
            z.element.innerText = b.text
            z.element.onclick = () => {
                App.route.push(b.route)
            }
        })
    }
}