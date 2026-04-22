class Animal{
    fazerSom(){
        console.log("Som genérico de animal...")
    }
}

class Lobo extends Animal{
    fazerSom(){
        console.log("AUUUUUUUUUUUUUUUUUU I'm preying on you tonight. Hunt you down eat you alive Just like animals. Animals. Like animals-mals 🐺🐺🐺 ")
    }
}

class Cavalo extends Animal{
    fazerSom(){
        console.log("CAVALO 🐴🐴🐴")
    }
}

class Cachorro extends Animal{
    fazerSom(){
    console.log("ABOBOURA 🐶🐶🐶")
    }
}

let meusObjetos = [new Lobo(), new Cavalo(), new Cachorro()];

for (let i = 0; i < meusObjetos.length; i++ ){
    meusObjetos[i].fazerSom();
}