// Converta as funções nos seguintes trechos de código em Arrow Functions:

// 3.1
const arr = [1, 2, 3, 4, 5];

const temp = arr.map(function(item) {
        return item + 10;
    });
console.log(temp);

//Versão Arrow Funtion
const conversao = arr.map(item => item + 10);
console.log(conversao);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
    return usuario.idade;
}
console.log(mostraIdade(usuario));

//Versão Arrow Funtion
const mostraIdadeAF = (usuario) => usuario.idade;
console.log(mostraIdadeAF(usuario));


// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

//Versão Arrow Funtion
const mostraUsuarioAF = (nome = 'Diego', idade = 18) => ({ nome, idade });
console.log(mostraUsuarioAF(nome, idade));
console.log(mostraUsuarioAF(nome));


// 3.4
const promise = function() {
    return new Promise(function(resolve, reject) {
        return resolve();
    })
}

//Versão Arrow Funtion
const promiseAF = () => new Promise((resolve, reject) => resolve());

promiseAF()
    .then(() => console.log('ok'))
    .catch(() => console.log('erro'));
