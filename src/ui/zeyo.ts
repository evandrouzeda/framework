import { Atributes, Zeyo } from "./lib"


abstract class Root implements Zeyo{
    element: HTMLElementTagNameMap[keyof HTMLElementTagNameMap]
    constructor(tagName: keyof HTMLElementTagNameMap){
        this.element = document.createElement(tagName)
    }
    
    object(cb: (z: Zeyo) => void): Zeyo{
        cb(this)
        return this
    }
    
    abstract addClass(...tokens: string[]): Zeyo
    abstract children(...child: Zeyo[]): Zeyo
    abstract atrib<K extends keyof Atributes>(key: K, value: string): Zeyo
    abstract atribs(atribs: { [key: string]: string }): Zeyo 
    abstract click(cb: (e: MouseEvent) => void): Zeyo
    abstract text(t: string): Zeyo
}

abstract class Text extends Root {
    constructor(tagName: keyof HTMLElementTagNameMap){
        super(tagName)
    }
    text(t: string): Zeyo{
        this.element.innerText = t
        return this
    }
}

abstract class On extends Text {
    constructor(tagName: keyof HTMLElementTagNameMap){
        super(tagName)
    }
    click(cb: (e: MouseEvent) => void) {
        this.element.onclick = cb
        return this
    }
}

abstract class CssClass extends On{
    constructor(tagName: keyof HTMLElementTagNameMap){
        super(tagName)
    }
    addClass(...tokens: string[]): Zeyo{
        this.element.classList.add(...tokens)
        return this
    }
}

abstract class Atribute extends CssClass{
    constructor(tagName: keyof HTMLElementTagNameMap){
        super(tagName)

    }
    atribs(atribs: {[key: string]: string}): Zeyo{
        for (const key in atribs) {
            this.element.setAttribute(key, atribs[key])
        }
        return this
    }
    atrib<K extends keyof Atributes>(key: K, value: string): Zeyo{
        this.element.setAttribute(key, value)
        return this
    }
}

class Create extends Atribute{   
    constructor(tagName: keyof HTMLElementTagNameMap){
        super(tagName)
    }

    children(...child: Zeyo[]): Zeyo{
        child.forEach(c => {
            this.element.appendChild(c.element)
        });
        return this
    }
}
export {Create as Z}



