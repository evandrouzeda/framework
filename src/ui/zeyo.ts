
interface Zeyo {
    element: HTMLElement
    addClass(...tokens: string[]): Zeyo
    children(...child: Zeyo[]): Zeyo
    object(cb: (e: Zeyo) => void): Zeyo
}
abstract class Root {
    element: HTMLElement
    constructor(element: HTMLElement){
        this.element = element
    }

    object(cb: (e: Zeyo) => void): Zeyo{
        cb(this)
        return this
    }

    abstract addClass(...tokens: string[]): Zeyo
    abstract children(...child: Zeyo[]): Zeyo
}

abstract class CssClass extends Root{
    constructor(element: HTMLElement){
        super(element)
    }
    addClass(...tokens: string[]): Zeyo{
        this.element.classList.add(...tokens)
        return this
    }
    abstract children(...child: Zeyo[]): Zeyo
}

class Create extends CssClass{   
    constructor(tagName: keyof HTMLElementTagNameMap){
        super(document.createElement(tagName))
    }

    children(...child: Zeyo[]): Zeyo{
        child.forEach(c => {
            this.element.appendChild(c.element)
        });
        return this
    }
}
export {Create as $}



