import DataHora from "./DataHora.js";
import Tela from "./Tela.js";
import Operacao from "./Operacao.js";
export default class CalculadoraControle {
    tela;
    operacao;
    constructor(tela = new Tela(), operacao = new Operacao()) {
        this.tela = tela;
        this.operacao = operacao;
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
                        this.adicionarOperador(target.dataset.valor);
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
    adicionarOperacao(valor) {
        this.operacao.adicionar(valor);
    }
    adicionarNumero(numero) {
        this.tela.conteudo = numero.toString();
        this.adicionarOperacao(numero.toString());
    }
    adicionarOperador(operador) {
        this.adicionarOperacao(operador);
    }
}
//# sourceMappingURL=CalculadoraControle.js.map