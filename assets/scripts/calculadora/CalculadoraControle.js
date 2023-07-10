import DataHora from "./DataHora.js";
import Tela from "./Tela.js";
export default class CalculadoraControle {
    tela;
    constructor(tela = new Tela()) {
        this.tela = tela;
        new DataHora();
        this.eventosBotoes();
    }
    eventosBotoes() {
        document.querySelectorAll("#teclado button").forEach(elemento => {
            elemento.addEventListener("click", (evento) => {
                const target = evento.target;
                switch (target.id) {
                    case "zero":
                    case "um":
                    case "dois":
                    case "tres":
                    case "quatro":
                    case "cinco":
                    case "seis":
                    case "sete":
                    case "oito":
                    case "nove":
                        this.adicionarNumero(Number(target.dataset.valor));
                        break;
                    case "adicao":
                    case "subtracao":
                    case "divisao":
                    case "multiplicao":
                        break;
                    case "ponto":
                        break;
                    case "limpar":
                        break;
                    case "desfazer":
                        break;
                    case "porcentagem":
                        break;
                    case "igual":
                        break;
                }
            });
        });
    }
    adicionarNumero(numero) {
        this.tela.conteudo = numero.toString();
    }
}
//# sourceMappingURL=CalculadoraControle.js.map