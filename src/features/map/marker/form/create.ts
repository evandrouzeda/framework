import Field from "../../../../core/entity/field.js"
import Form from "../../../../core/entity/form.js"
import Repository from "../../../../core/repository/_repository.js"
import Marker from "../domain/marker.js"

export default class FormCreateMarker extends Form {
    constructor(repository: Repository, model: Marker){
        super(repository, model, "Criar Marker", "createmarker", "Criar")
    }
    async getFields(): Promise<{[key: string]: Field}>{
        return {
            "titulo": new Field("text", "Titulo", "Bebedouro do Parque")
        }
    }
}