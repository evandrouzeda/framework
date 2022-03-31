export default interface Page {
    route: string
    title?: string
    children?: Array<Node>
    auth?: string
    params?: { [key: string]: string }
}