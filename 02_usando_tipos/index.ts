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