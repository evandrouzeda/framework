class Root {
    constructor(element) {
        this.element = element;
    }
    object(cb) {
        cb(this);
        return this;
    }
}
class CssClass extends Root {
    constructor(element) {
        super(element);
    }
    addClass(...tokens) {
        this.element.classList.add(...tokens);
        return this;
    }
}
class Create extends CssClass {
    constructor(tagName) {
        super(document.createElement(tagName));
    }
    children(...child) {
        child.forEach(c => {
            this.element.appendChild(c.element);
        });
        return this;
    }
}
export { Create as $ };
