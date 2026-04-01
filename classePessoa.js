class Pessoa{
    constructor(nome, idade, profissao){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

    saudar(){
        console.log(`Olá, meu nome é ${this.nome}, minha idade é de ${this.idade} anos, minha profissão é ser ${this.profissao}!`);
    }
    fazerAniversario(){
        this.idade +=1;
        console.log(`Feliz aniversário ${this.nome}, agora você tem ${this.idade} anos.`);
    }
}

let pessoa1 = new Pessoa("Julião", 16, "estudante");
pessoa1.saudar();
pessoa1.fazerAniversario();
