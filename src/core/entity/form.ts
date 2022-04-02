import Repository from "../repository/_repository"
import Field from "./field"

export default abstract class Form {
    title: string 
    fields: {[key: string]: Field} = {}
    action: string
    controller: string
    model: any
    repository: Repository
    constructor(repository: Repository, model: any, title: string= "", controller: string = "", action: string = ""){
        this.repository = repository
        this.model = model
        this.title = title
        this.controller = controller
        this.action = action
    }
    abstract getFields(): Promise<{[key: string]: Field}>
}