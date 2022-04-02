import Form from "../../core/entity/form.js"
import { Z } from "../../ui/zeyo.js"
import FormElement from "./_element.js"
import Fields from "./_list.js"

export default class ComponentForm {
    static main = new Z("form")

    static async create(form: Form){
        const fields = await form.getFields()
        const properties: {[key: string]: Z} = {}
        return this.main.addClass("d-grid", "gap-m").children(
            new Z("h1").object(e => e.element.innerText = "Login"),
            ...Object.keys(fields).map(k=>{
                properties[k] = new Z("input").atrib("type", fields[k].type).atrib("placeholder", fields[k].placeholder)
                return new Z("div").addClass("d-grid", "gap-p").children(
                    new Z("label").object(e => e.element.innerText = fields[k].label),
                    properties[k],
                )
            }),
            new Z("button").object(e => e.element.innerText = "Entrar")
        ).object(e => e.element.onsubmit = (e)=>{
            e.preventDefault()
            console.log(e.target)
            for (const key in fields) {
                if (Object.prototype.hasOwnProperty.call(form.model, key)){
                    const e: any = properties[key].element
                    form.model[key] = e.value
                }
            }
            console.log(form.model);
        })
        /* const title = document.createElement("h2")
        title.innerText = form.title
        this.main.appendChild(title)
        
        const properties: {[key: string]: FormElement}= {}
        for(const key in fields){
            const field = Object.assign(new Fields.list[fields[key].type](), fields[key])
            properties[key] = field
            this.main.appendChild(field.getHtml())
        }
        const button = document.createElement("button")
        button.innerText = form.title
        this.main.appendChild(button)
        this.main.onsubmit = e => {
            e.preventDefault()
            console.log("entrou")
            for (const key in fields) {
                if (Object.prototype.hasOwnProperty.call(form.model, key))
                    form.model[key] = properties[key].getValue()
            }
            console.log(form)
        } */
    }
}