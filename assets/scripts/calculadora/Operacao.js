export default class Operacao {
    operacao;
    constructor(operacao = []) {
        this.operacao = operacao;
    }
    adicionar(valor) {
        this.operacao.push(valor);
        console.log(this.operacao);
        console.log("-------------------");
        console.log(this.operacao.length);
        return this.operacao.length;
    }
    get length() {
        return this.operacao.length;
    }
}
//# sourceMappingURL=Operacao.js.map