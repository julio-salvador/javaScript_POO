class Automovel {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  exibirDetalhes() {
    return `${this.marca}, ${this.modelo}, ${this.ano}`;
  }
}

class Carro extends Automovel {
  constructor(marca, modelo, ano, portas, quilometragem) {
    super(marca, modelo, ano);
    this.portas = portas;
    this.quilometragem = quilometragem;
  }

  exibirDetalhes() {
    return `${super.exibirDetalhes()}, portas: ${this.portas}, Km: ${this.quilometragem}`;
  }
}

class Moto extends Automovel {
  constructor(marca, modelo, ano, cilindrada) {
    super(marca, modelo, ano);
    this.cilindrada = cilindrada;
  }

  exibirDetalhes() {
    return `${super.exibirDetalhes()}, cilindrada: ${this.cilindrada}`;
  }
}

// Instâncias
let moto1 = new Moto("Suzuki", "GSX-8R", 2027, 776);
console.log(moto1.exibirDetalhes()); 

let carro1 = new Carro("Lincoln", "Mark III", 1958, 4, 120000);
console.log(carro1.exibirDetalhes()); 