export default class Operacao{
    constructor(
        private operacao: string[] = []
    ){
        
    }

    adicionar(valor: string): number {
        this.operacao.push(valor);
        console.log(this.operacao);
        console.log("-------------------");
        console.log(this.operacao.length);



        return this.operacao.length;

    }

    get length(): number {
        return this.operacao.length;
    }
}