class Carro{
    constructor(marca, ano,modelo){
        this.marca = marca;
        this.ano = ano;
        this.modelo = modelo;
    }

    katchau(){
        console.log(`${this.marca}, ${this.ano}, ${this.modelo}.`);
    }
}

let carro1 = new Carro("Mazda", 2006, "Mazda RX-7");
carro1.katchau();

