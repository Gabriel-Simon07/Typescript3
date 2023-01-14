import { Imprimivil } from "./imprimivel.js";

export function imprimir(...objetos: Array<Imprimivil>) {
    objetos.forEach(objeto => console.log(objeto.paraTexto()));
}