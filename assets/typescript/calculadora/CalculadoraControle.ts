import DataHora from "./DataHora.js";
import Tela from "./Tela.js";
export default class CalculadoraControle {
    constructor(
        private tela = new Tela(),
    ){
        this.tela.conteudo = "1.5";
        new DataHora()
    }
}