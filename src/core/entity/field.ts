export default class Field {
    type: string
    label: string
    placeholder: string
    list?: Array<{ value: string; name: string }>
    extra?: string[]
    constructor(type: string, label: string, placeholder: string, list?: Array<{ value: string; name: string }>, extra?: string[]) {
        this.type = type
        this.label = label
        this.placeholder = placeholder
        this.list = list
        this.extra = extra
    }
}