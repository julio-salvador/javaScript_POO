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
        console.log(` Turma 7: ${this.matricula}`)
        console.log("=======================================")
        console.log(`Relatorio do aluno ${this.nome}:`);
        console.log(`Matricula: ${this.matricula}`);
        console.log(`Media Final: ${this.calculaMedia().toFixed(2)}`);
        console.log(`Status: ${this.obterStatus()}`);
        console.log("=======================================")
    }

}

let turma = [
    new Aluno("Lúis", "Gastronomia", [2.5, 4.0, 6.3] ),
    new Aluno("Limas", "Gastronomia", [8.2, 7.4, 9.1] ),
    new Aluno("Jonas", "Gastronomia", [9.9, 9.0, 8.8] ),
    new Aluno("Carlos", "Gastronomia", [7.7, 8.9, 4.8] ),
    new Aluno("Nicolas", "Gastronomia", [8.7, 7.7, 7.0] )
]

console.log(turma[0]);
console.log(turma[1]);
console.log(turma[2]);
console.log(turma[3]);
console.log(turma[4]);

// let aluno1 = new Aluno("Julio", "Gastronomia", [9.5, 8.0, 7.5] );
// console.log(aluno1.calculaMedia());
// console.log(aluno1.obterStatus());
turma[0].exibirRelatorio()
turma[1].exibirRelatorio()
turma[2].exibirRelatorio()
turma[3].exibirRelatorio()
turma[4].exibirRelatorio()
