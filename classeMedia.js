class Aluno{
    constructor(nome, matricula, notas){
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;
    }

    calculaMedia(){
        let soma = 0;
        for( let i = 0; i < this.notas.length; i++){
            soma += this.notas[i];
        }
        return soma / this.notas.length;
    }

    obterStatus(){
        const media = this.calculaMedia()

        if (media >=7){
            return "Aprovado"
        } 
        else if (media >=5){
            return "Recuperação"
        } 
        else{
            return "Reprovado"
        }
    }

    exibirRelatorio(){
        console.log(`Relatorio do aluno ${this.nome}:`);
        console.log(`Matricula: ${this.matricula}`);
        console.log(`Media Final: ${this.calculaMedia()}`);
        console.log(`Status: ${this.obterStatus()}`);
    }

}

let aluno1 = new Aluno("Julio", "Gastronomia", [9.5, 8.0, 7.5] );
console.log(aluno1.calculaMedia());
console.log(aluno1.obterStatus());
aluno1.exibirRelatorio()