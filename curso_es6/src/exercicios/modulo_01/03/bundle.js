"use strict";

// Converta as funções nos seguintes trechos de código em Arrow Functions:
// 3.1
var arr = [1, 2, 3, 4, 5];
var temp = arr.map(function (item) {
  return item + 10;
});
console.log(temp); //Versão Arrow Funtion

var conversao = arr.map(function (item) {
  return item + 10;
});
console.log(conversao); // 3.2
// Dica: Utilize uma constante pra function

var usuario = {
  nome: 'Diego',
  idade: 23
};

function mostraIdade(usuario) {
  return usuario.idade;
}

console.log(mostraIdade(usuario)); //Versão Arrow Funtion

var mostraIdadeAF = function mostraIdadeAF(usuario) {
  return usuario.idade;
};

console.log(mostraIdadeAF(usuario)); // 3.3
// Dica: Utilize uma constante pra function

var nome = "Diego";
var idade = 23;

function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
}

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome)); //Versão Arrow Funtion

var mostraUsuarioAF = function mostraUsuarioAF() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostraUsuarioAF(nome, idade));
console.log(mostraUsuarioAF(nome)); // 3.4

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
}; //Versão Arrow Funtion


var promiseAF = function promiseAF() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

promiseAF().then(function () {
  return console.log('ok');
})["catch"](function () {
  return console.log('erro');
});
