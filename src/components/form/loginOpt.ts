import FormStore from "../../features/user/state/_store.js";
import { Z } from "../../ui/zeyo.js";

export default class LoginOpt {
    main = new Z("p")
    create(texts: {pergunta: string; acao: string}){
        return this.main = new Z("p").object(z => z.element.innerText = `${texts.pergunta} `).children(
            new Z("b").addClass("pointer").object(z => {
                z.element.innerText = `${texts.acao}`
                z.element.style.textDecoration = "underline"
                z.element.onclick = async () => FormStore.changeState("acao")
            })
        )
    }

}