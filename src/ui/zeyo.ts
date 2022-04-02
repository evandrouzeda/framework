
interface Zeyo {
    element: HTMLElementTagNameMap[keyof HTMLElementTagNameMap]
    addClass(...tokens: string[]): Zeyo
    children(...child: Zeyo[]): Zeyo
    object(cb: (e: Zeyo) => void): Zeyo
    atrib<K extends keyof Atributes>(key: K, value: string): Zeyo
    atribs(atribs: {[key: string]: string}): Zeyo
}
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
}

abstract class CssClass extends Root{
    constructor(tagName: keyof HTMLElementTagNameMap){
        super(tagName)
    }
    addClass(...tokens: string[]): Zeyo{
        this.element.classList.add(...tokens)
        return this
    }
}

interface Atributes {
    "type": string
    "placeholder": string
    "value": string
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



