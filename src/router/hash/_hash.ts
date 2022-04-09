import Push from "./push.js";

export default class Hash extends Push{
    static on = false
    static remove(){
        if(this.on)
        window.history.back()
        this.modal.main.element.remove()
    }
}