// string
let nome = "Zé";
console.log(nome);
// nome = 28;

// numbers
let idade = 27;
idade = 27.5;
console.log(idade);

// boolean
let aprendendoTS = true;
console.log(aprendendoTS);

// tipagem explícita
let receboQualquerTipo: any;
receboQualquerTipo = 1;
console.log(receboQualquerTipo);
receboQualquerTipo = "string";
console.log(receboQualquerTipo);

let receboSomenteNumeros: number;
receboSomenteNumeros = 1;
console.log(receboSomenteNumeros);

// array: tipagem explícita
let arrayLetrasENumeros: any[] = ["a", "b", "c"];
arrayLetrasENumeros.push(1);
console.log(arrayLetrasENumeros);

// tuplas
let endereco: [string, number] = ["Rua dos Bobos", 0];
console.log(endereco);

// enums
enum Cor {
  Cinza = 100,
  Verde,
  Azul,
}

let minhaCor: Cor = Cor.Cinza;
console.log(minhaCor); // 100
console.log(Cor.Verde, Cor.Azul); // 101, 102

// any
let carro: any = "BWM";
console.log(carro);
carro = { marca: "BMW", ano: 2019 };
console.log(carro);
