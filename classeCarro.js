class Carro{
    constructor(katchau, marca, ano, quilometragem){
        this.katchau = katchau;
        this.marca = marca;
        this.ano = ano;
        this.quilometragem = quilometragem;
    }

    saudar(){
        console.log(` ${this.katchau}, ${this.marca}, ${this.ano}, ${this.quilometragem}.`);
    }
}

let carro1 = new Carro("katchau", "Mazda", 2006, 3333);
carro1.saudar();

