import Form from "../../core/entity/form.js"
import FormElement from "./_element.js"
import Fields from "./_list.js"

export default class ComponentForm {
    main: HTMLElement
    constructor(destino: Node){
        this.main = document.createElement("form")
        destino.appendChild(this.main)
    }

    async create(form: Form){
        const fields = await form.getFields()
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
        }
    }
}