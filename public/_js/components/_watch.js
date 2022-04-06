/**
 * This function will watch a object, if something changes, it will change the component
 * @param obj
 * @param component
 * @returns
 */
export default function Watch(obj, component) {
    const newComponent = new Proxy(component, {
        set: (target, key, value) => {
            var _a;
            if (key === "main")
                (_a = target.main.element.parentElement) === null || _a === void 0 ? void 0 : _a.replaceChild(value.element, target.main.element);
            target[key] = value;
            return true;
        }
    });
    class Watcher {
        constructor(parent, key) {
            this.key = "";
            this.parent = parent;
            this.key = key;
        }
        get(target, key, receiver) {
            if (typeof target[key] === 'object' && target[key] !== null) {
                return new Proxy(target[key], new Watcher(receiver, key));
            }
            else {
                return target[key];
            }
        }
        set(target, key, value, receiver) {
            target[key] = value;
            if (this.parent === null)
                newComponent.create(target);
            else
                this.parent[this.key] = target;
            return true;
        }
    }
    return [new Proxy(obj, new Watcher(null, "")), newComponent];
}
