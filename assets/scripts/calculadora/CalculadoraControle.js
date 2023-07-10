import DataHora from "./DataHora.js";
import Tela from "./Tela.js";
export default class CalculadoraControle {
    tela;
    constructor(tela = new Tela()) {
        this.tela = tela;
        this.tela.conteudo = "1.5";
        new DataHora();
    }
}
//# sourceMappingURL=CalculadoraControle.js.map