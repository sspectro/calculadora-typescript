export default class DataHora{
    constructor(
                // Pega segunda div interna da div de id datetime
                private elementoData: HTMLDivElement | null = document.querySelector("#datetime > div:nth-child(2)"),
                // Pega o elemento time que está nda div de id dateime
                private elementoHora: HTMLTimeElement | null = document.querySelector("#datetime time")
            )
    {
        this.renderizar();
        // Define execução do metodo renderizar a cada segundo - que é representado por mil milesegundo
        setInterval(() => this.renderizar(), 1000);  
    }

    renderizar(){
        const dataAtual = new Date();
        const dia = dataAtual.getDate();
        //const mes = dataAtual.getMonth() + 1;
        // Retorana mês por extenso
        const mes = dataAtual.toLocaleDateString("pt-BR", {month:"long"});
        const ano = dataAtual.getFullYear();
        const hora = dataAtual.getHours();
        // Converte o/os minutos em string e adicionar 0 a esquerda, caso seja menor que 10
        const minuto = dataAtual.getMinutes().toString().padStart(2, '0');

        // Fará com que os dois pontos da hora na calculadora mude a cada segundo
        // Caso o segundo seja par mostra os dois pontos - impar mostra vazio - dá a percepção de está piscando
        const doisPontos = dataAtual.getSeconds() % 2 === 0 ? ":" : " ";

        this.data = `${dia} ${mes} ${ano}`;
        this.hora = `${hora}${doisPontos}${minuto}`;
    }

    set data(conteudo: string){
        if(this.elementoData){
            this.elementoData.innerHTML = conteudo;
        }
    }

    set hora(conteudo: string){
        if(this.elementoHora){
            this.elementoHora.innerHTML = conteudo;
        }
    }
}