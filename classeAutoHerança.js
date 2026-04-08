class Automovel{
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirDetalhes(){
        return `${super.exibirDetalhes()}, Portas: ${this.portas}`;
    }

}

class Carro extends Automovel{
    constructor(marca, modelo, ano, portas){
        super(marca, modelo, ano);
        this.portas = portas;
    }
}

class Automovel{
    constructor(marca, modelo, ano, cilindrada){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cilindrada = cilindrada;
    }

    exibirDetalhes(){
        return `${super.exibirDetalhes()}, Cilindrada: ${this.cilindrada}`;
    }
}

class Moto extends Automovel{
    constructor(marca, modelo, ano, cilindrada){
        super(marca, modelo, ano, cilindrada);
        this.cilindrada = cilindrada;
    }
}

let moto1 = new Moto("Yamaha", "MT-03 - naked", 2024, 321);
console.log(moto1.exibirDetalhes());

let carro1 = new Carro("Nissan", "Skyline R34", 1999, 5);
console.log(carro1.exibirDetalhes());
