import App from "../../app.js"
import Field from "../../core/entity/field.js"
import Form from "../../core/entity/form.js"
import Create from "../../features/estacionamento/controller/create.js"
import Update from "../../features/estacionamento/controller/update.js"
import { Zeyo } from "../../ui/lib.js"
import { Z } from "../../ui/zeyo.js"
import FormElement from "./_element.js"
import Fields from "./_list.js"

export default class ComponentForm {
    main: Z = new Z("form")
    properties: { [key: string]: FormElement } = {}
    fields: { [key: string]: Field } = {}
    async create(form: Form) {
        this.properties = {}
        this.fields = await form.getFields()
        console.log(this.fields)
        return this.main = new Z("form").addClass("d-grid", "gap-m", "ac-between").children(
            new Z("div").addClass("d-grid", "gap-m").children(
                new Z("h2").object(e => e.element.innerText = form.title),
                ...Object.keys(this.fields).map(k => {
                    this.properties[k] = Object.assign(new Fields.list[this.fields[k].type](), this.fields[k])
                    const z = this.properties[k].create()
                    this.properties[k].setValue(form.model[k])
                    return z
                })
            ),
            new Z("button").object(e => e.element.innerText = form.action)
        ).object(z => z.element.onsubmit = e => {
            e.preventDefault()
            for (const key in this.fields) {
                if (Object.prototype.hasOwnProperty.call(form.model, key))
                    form.model[key] = this.properties[key].getValue()
            }
            console.log(form);
            if (form.controller === "create")
                Create.execute(form)
            else
                Update.execute(form)
            //TODO: aqui tem que chamar o controller
            //App.route.push("/estacionamento")
        })

    }
}