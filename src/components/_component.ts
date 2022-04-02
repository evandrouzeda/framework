import { Z } from "../ui/zeyo";

export default interface Component {
    create(): Promise<Z> | Z;
    main?: Z
}