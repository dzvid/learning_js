// // 5º Exercício
// // Utilizando o operador de rest/spread (...) realize as seguintes operações:
// 5.1 Rest
// A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira
// posição do vetor e outra variável y que recebe todo restante dos dados.
// console.log(x); // 1
// console.log(y); // [2, 3, 4, 5, 6]
// Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:
// // function soma...
// console.log(soma(1, 2, 3, 4, 5, 6)); // 21
// console.log(soma(1, 2)); // 3

// 5.1 A
const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

// Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:
// // function soma...
// // console.log(soma(1, 2, 3, 4, 5, 6)); // 21
// // console.log(soma(1, 2)); // 3

// 5.1B Usando Arrow function
const soma = (...nums) => nums.reduce( (item, next) => item + next);

// Por função:
// function soma(...nums){
//     return nums.reduce((item, next) => item + next);
// }

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3


// 5.2 Spread
// // A partir do objeto e utilizando o operador spread:
// // const usuario = {
// //  nome: 'Diego',
// //  idade: 23,
// //  endereco: {
// //  cidade: 'Rio do Sul',
// //  uf: 'SC',
// //  pais: 'Brasil',
// //  }
// // };
// // Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.
// // Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

// Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.
const usuario2 = { ...usuario, nome: 'Gabriel' };

console.log(usuario2);

// Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.

const usuario3 = { 
    ...usuario, 
    endereco:{ 
        ...usuario.endereco, 
        cidade: 'Lontras' 
    } 
};

console.log(usuario3);
