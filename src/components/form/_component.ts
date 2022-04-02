import App from "../../app.js"
import Field from "../../core/entity/field.js"
import Form from "../../core/entity/form.js"
import { Zeyo } from "../../ui/lib.js"
import { Z } from "../../ui/zeyo.js"
import FormElement from "./_element.js"
import Fields from "./_list.js"

export default class ComponentForm {
    static main = new Z("form")
    static form: Form
    static properties: {[key: string]: FormElement} = {}
    static fields: {[key: string]: Field}
    static async create(form: Form){
        this.form = form
        this.properties = {}
        this.fields = await this.form.getFields()
        console.log(this.fields)
        return this.main = new Z("form").addClass("d-grid", "gap-m").children(
            new Z("h2").object(e => e.element.innerText = this.form.title),
            ...Object.keys(this.fields).map(k=>{
                this.properties[k] = Object.assign(new Fields.list[this.fields[k].type](), this.fields[k])
                const z = this.properties[k].create()
                this.properties[k].setValue(this.form.model[k])
                return z
            }),
            new Z("button").object(e => e.element.innerText = this.form.action)
        ).object(this.submit.bind(this))

    }
    static submit(e: Zeyo){
        e.element.onsubmit = e => {
            e.preventDefault()
            console.log(this)
            for (const key in this.fields) {
                if (Object.prototype.hasOwnProperty.call(this.form.model, key)){
                    console.log(this.properties[key].element.element);
                    
                    this.form.model[key] = this.properties[key].getValue()
                }
            }
            console.log(this.form);
            //TODO: aqui tem que chamar o controller
            //App.route.push("/estacionamento")
        }
    }
}