export default class Operacao {
    operacao;
    onCalculado;
    constructor(opts, operacao = []) {
        this.operacao = operacao;
        this.onCalculado = opts.onCalculado;
    }
    adicionar(valor) {
        this.operacao.push(valor);
        console.log(this.operacao);
        if (this.operacao.length === 3) {
            this.calcular();
        }
        console.log("-------------------");
        console.log(this.operacao.length);
        return this.length;
    }
    obterResultado() {
        let resultado;
        try {
            resultado = eval(this.operacao.join("")).toString();
        }
        catch (e) {
            resultado = "ERRO";
        }
        return resultado;
    }
    calcular() {
        let resultado = this.obterResultado();
        if (resultado.length > 12) {
            resultado = resultado.substr(0, 12);
        }
        this.operacao = [resultado];
        this.onCalculado(resultado);
    }
    get length() {
        return this.operacao.length;
    }
}
//# sourceMappingURL=Operacao.js.map