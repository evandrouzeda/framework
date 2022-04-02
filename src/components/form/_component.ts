import Form from "../../core/entity/form.js"
import { Z } from "../../ui/zeyo.js"
import FormElement from "./_element.js"
import Fields from "./_list.js"

export default class ComponentForm {
    static main = new Z("form")

    static async create(form: Form){
        const fields = await form.getFields()
        const properties: {[key: string]: FormElement} = {}
        return this.main.addClass("d-grid", "gap-m").children(
            new Z("h2").object(e => e.element.innerText = form.title),
            ...Object.keys(fields).map(k=>{
                properties[k] = Object.assign(Fields.list[fields[k].type], fields[k])
                const z = properties[k].create()
                properties[k].setValue(form.model[k])
                return z
            }),
            new Z("button").object(e => e.element.innerText = form.action)
        ).object(e => e.element.onsubmit = (e)=>{
            e.preventDefault()
            for (const key in fields) {
                if (Object.prototype.hasOwnProperty.call(form.model, key))
                    form.model[key] = properties[key].getValue()
            }
            console.log(form.model);
        })
    }
}