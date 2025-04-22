const meuMap = new Map();
meuMap.set('nome', 'Sara');
meuMap.set('10', 'dez');
meuMap.set('true', 'valor booleano');
meuMap.set({id: 1}, 'objeto como chave');

meuMap.forEach((valor, chave) => {
    console.log(chave, valor);
});

const numeros = new Set();
numeros.add(1);
numeros.add(2);
numeros.add(2);
console.log(numeros);

const frutas = new Set();
frutas.add('maçã');
frutas.add('banana');
frutas.add('laranja');

frutas.forEach((item) => { //percorre o objeto
    console.log(item);
})

const duplicados = [1, 2, 2, 3, 4, 4, 5];
const semDuplicados = [new Set(duplicados)]; //set elimina os números repetidos
console.log(semDuplicados);

function saudacao(nome) {
    return `Olá, ${nome}!`;
}

let nomeDaPessoa = "Sara"
console.log(saudacao("Sara"));
console.log(saudacao(nomeDaPessoa));

//arrow function (função de seta)

const soma = (a, b) => {
    const resultado = a + b;
    return resultado;
}

console.log(soma(3, 4));