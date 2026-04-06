class ContaBancaria{

    #saldo = 0;

    constructor(titular){
        this.titular = titular;
    }

    depositar(valor){
        if(valor > 0){
            this.saldo += valor;
            console.log(`Depósito de R$ ${valor} feito.`);
        }
    }
     sacar(valor){
        if(valor > 0 && valor <= this.#saldo){
            this.#saldo -= valor;
            console.log(`Saque de R$ ${valor} feito.`);
        }else{
            console.log("Saldo insuficiente ou valor inválido");
        }
     }

     exibirSaldo(){
        return `Olá, seu saldo é R$ ${this.#saldo}`;
     }
}

const conta1 = new ContaBancaria("Héracles");
conta1.depositar(1000);
conta1.depositar(1000);
conta1.depositar(1000);
conta1.depositar(1000);
conta1.depositar(1000);
conta1.sacar(5000);
console.log(conta1.exibirSaldo());