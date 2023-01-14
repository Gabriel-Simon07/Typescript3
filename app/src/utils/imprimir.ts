import { Negociacao } from "../models/negociacao";

export function imprimir(...objetos: Array<Object>) {
    objetos.forEach(objeto => console.log(objeto));
}