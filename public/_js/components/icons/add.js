import { Z } from "../../ui/zeyo.js";
export default class Add {
    constructor() {
        this.main = new Z("div");
    }
    create(o) {
        return this.main = new Z("div").addClass("teste").object(o => {
            o.element.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`;
        });
    }
    ;
}
