import DataHora from "./DataHora.js";
import Tela from "./Tela.js";
import Operacao from "./Operacao.js";

export default class CalculadoraControle {
    constructor(
        private tela = new Tela(),
        private operacao = new Operacao(),
    ){
        new DataHora()

        this.eventosBotoes();
    }

    eventosBotoes(){
        // Recupera todos os botões que estão na div de id teclado
        document.querySelectorAll("#teclado button").forEach(elemento => {
            elemento.addEventListener("click", (evento: Event) => {
                const target = evento.target as HTMLButtonElement;

                switch(target.id){
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
                        this.adicionarOperador(target.dataset.valor as string);
                        //this.adicionarOperador(<string>target.dataset.valor);

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
        })
    }

    adicionarOperacao(valor: string){
        this.operacao.adicionar(valor);
    }

    adicionarNumero(numero: number): void{
        this.tela.conteudo = numero.toString();

        this.adicionarOperacao(numero.toString());
    }

    adicionarOperador(operador: string): void{
        this.adicionarOperacao(operador);
    }
}