import { Zeyo } from "../../ui/lib.js";
import { Z } from "../../ui/zeyo.js";
//https://freeicons.io/icon-list/business-and-online-icons
interface IconsList {
    "add": string
    "menu": string
}

const icons: {[key: string]: string} = {
    "add": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
    "menu": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`
}

export default class Icons {
    static get(icon: keyof IconsList): Zeyo{
        return new Z("div").addClass("icon").object(o => {
            o.element.innerHTML = icons[icon]
        })
    }
}