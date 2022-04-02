var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import App from "../app.js";
import { Z } from "../ui/zeyo.js";
export default class Build {
    static build(path) {
        return __awaiter(this, void 0, void 0, function* () {
            App.root.innerHTML = "";
            const params = {};
            const page = App.pages.find(p => {
                if (p.route === path)
                    return true;
                else {
                    const route = p.route.split("/");
                    const pathname = path.split("/");
                    if (route.length !== pathname.length)
                        return false;
                    for (const i in route) {
                        if (route[i] !== pathname[i] && route[i][0] !== ":")
                            return false;
                        else if (route[i][0] === ":")
                            params[route[i].substring(1)] = pathname[i];
                    }
                    return true;
                }
            });
            // aqui tem que chamar o builder para construir a pagina, passando os elementos por parametro
            if (page)
                App.root.appendChild((yield page.create()).element);
            else
                App.root.appendChild((yield {
                    route: "/404",
                    create() {
                        return __awaiter(this, void 0, void 0, function* () {
                            return new Z("h1").object(e => {
                                e.element.innerText = "Pagina nao encontrada";
                            });
                        });
                    }
                }.create()).element);
        });
    }
}
