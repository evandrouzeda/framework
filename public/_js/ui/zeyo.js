class Root {
    constructor(tagName) {
        this.element = document.createElement(tagName);
    }
    object(cb) {
        cb(this);
        return this;
    }
}
class Text extends Root {
    constructor(tagName) {
        super(tagName);
    }
    text(t) {
        this.element.innerText = t;
        return this;
    }
}
class On extends Text {
    constructor(tagName) {
        super(tagName);
    }
    click(cb) {
        this.element.onclick = cb;
        return this;
    }
}
class CssClass extends On {
    constructor(tagName) {
        super(tagName);
    }
    addClass(...tokens) {
        this.element.classList.add(...tokens);
        return this;
    }
}
class Atribute extends CssClass {
    constructor(tagName) {
        super(tagName);
    }
    atribs(atribs) {
        for (const key in atribs) {
            this.element.setAttribute(key, atribs[key]);
        }
        return this;
    }
    atrib(key, value) {
        this.element.setAttribute(key, value);
        return this;
    }
}
class Create extends Atribute {
    constructor(tagName) {
        super(tagName);
    }
    children(...child) {
        child.forEach(c => {
            this.element.appendChild(c.element);
        });
        return this;
    }
}
export { Create as Z };
