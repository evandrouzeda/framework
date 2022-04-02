export interface Zeyo {
    element: HTMLElementTagNameMap[keyof HTMLElementTagNameMap]
    addClass(...tokens: string[]): Zeyo
    children(...child: Zeyo[]): Zeyo
    object(cb: (e: Zeyo) => void): Zeyo
    atrib<K extends keyof Atributes>(key: K, value: string): Zeyo
    atribs(atribs: {[key: string]: string}): Zeyo
}

export interface Atributes {
    "type": string
    "placeholder": string
    "value": string
}