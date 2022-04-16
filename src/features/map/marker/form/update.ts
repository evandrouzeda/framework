import Field from "../../../../core/entity/field.js"
import Form from "../../../../core/entity/form.js"
import Repository from "../../../../core/repository/_repository.js"
import Marker from "../domain/marker.js"

export default class FormUpdateMarker extends Form {
    constructor(repository: Repository, model: Marker){
        super(repository, model, model.titulo, "createmarker", "Criar")
    }
    async getFields(): Promise<{[key: string]: Field}>{
        return {
            "titulo": new Field("text", "Titulo", "Bebedouro do Parque")
        }
    }
}