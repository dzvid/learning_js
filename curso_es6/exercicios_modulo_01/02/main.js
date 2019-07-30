const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Milena', idade: 28, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
    { nome: 'Metro Boomin', idade: 25, empresa: 'Google' },
    { nome: 'Andressa', idade: 24, empresa: 'Google' }
   ];

// 2.1 Utilizando o map 
// Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

const idades = usuarios.map(({ idade }) => idade);

console.log(idades);


// 2.2 Utilizando o filter
// Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
// anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]

const usuariosRocketseat = usuarios.filter( 
    usuario => usuario.idade > 18 && usuario.empresa === 'Rocketseat'
);

console.log(usuariosRocketseat);


// 2.3 Utilizando o find
// Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
const usuarioGoogle = usuarios.find( usuario =>  usuario.empresa === 'Google');

console.log(usuarioGoogle);

// 2.4 Unindo operações
// Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
// no máximo 50 anos:

//dobro a idade e aplico o filtro
const usuariosIdadeCinquenta = usuarios
    .map( usuario => ({ ...usuario, idade: usuario.idade  * 2 }))
    .filter( usuario => usuario.idade <= 50);

console.log(usuariosIdadeCinquenta);