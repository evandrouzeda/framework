import { Zeyo } from "../ui/lib";
import { Z } from "../ui/zeyo";

export default interface Component { main: Z, create: (o?: any) => Zeyo | Promise<Zeyo> }