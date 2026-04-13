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
  constructor(marca, modelo, ano, portas) {
    super(marca, modelo, ano);
    this.portas = portas;
  }

  exibirDetalhes() {
    return `${super.exibirDetalhes()}, Portas: ${this.portas}`;
  }
}

class Moto extends Automovel {
  constructor(marca, modelo, ano, cilindrada) {
    super(marca, modelo, ano);
    this.cilindrada = cilindrada;
  }

  exibirDetalhes() {
    return `${super.exibirDetalhes()}, Cilindrada: ${this.cilindrada}`;
  }
}

// Instâncias
let moto1 = new Moto("Yamaha", "Yamaha R15", 2025, 155);
console.log(moto1.exibirDetalhes()); 

let carro1 = new Carro("Nissan", "Skyline R34", 1999, 4, 120000);
console.log(carro1.exibirDetalhes()); 