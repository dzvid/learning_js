// Pra iniciar o ambiente de um projeto para web
// yarn init
// yarn add @babel/cli
// yarn add @babel/preset-env
// yarn add @babel/core
//Pra usar rest/spread  (é o operador que usa os tres pontos)
// yarn add @babel/plugin-proposal-object-rest-spread
//O Babel so controla as depencias no ambiente de desenvolvimento, no ambiente de produção
//só vai estar o codigo transpilado ja com os arquivos necessarios

// AULA CLASSES
// //  class List{
// //     constructor(){
// //         this.data = [];
// //     }

// //     add(itemData){
// //         this.data.push(itemData);
// //         console.log(this.data);
// //     }
// // }

// // class TodoList extends List{
// //     constructor(){
// //         super();

// //         this.usuario = 'Diego';
// //     }

// //     mostraUsuario(){
// //         console.log(this.usuario);
// //     }

// //     // addTodo(){
// //     //     this.todos.push('Novo todo');
// //     //     console.log(this.todos);
// //     // }
// // }

// // var MinhaLista = new TodoList();

// // document.getElementById('novotodo').onclick = function(){
// //     MinhaLista.add('Novo todo');
// // }

// // MinhaLista.mostraUsuario();

// // Metodos e atributos estaticos

// // class Matematica{
// //     static soma(a, b){
// //         return a + b;
// //     }
// // }

// // console.log(Matematica.soma(1, 2));

//AULA CONSTANTES E VARIAVEIS DE ESCOPO
// // function teste(x){
// //     let y = 2;

// //     if(x > 5){
// //         console.log(x, y);
// //     }
// // }

// // teste(10);

//AULA OPERAÇÕES EM ARRAYS
// // const arr = [1, 3, 4, 5, 8, 9];

// // //map serve pra percorrer o vetor e retornar algo de dentro (uma nova informação)
// // const newArr = arr.map(function (item, index){
// //     return item + index;
// // });

// // console.log(newArr); //prints [1, 4, 6, 8, 12, 14]

// // //reduce: Consumir todo vetor e retornar um unico valor
// // const sum = arr.reduce(function(total, next){
// //     return total + next;
// // });

// // console.log(sum); //prints 30


// // //filter: 
// // //Supor que queiramos os numeros pares
// // const filter = arr.filter(function(item){
// //     return item % 2 === 0;
// // });

// // console.log(filter); //prints [4, 8]

// // //find

// // const find = arr.find(function(item){
// //     return item === 4;
// // });

// // console.log(find); //prints 4

//AULA ARROW FUNCTIONS

// // const arr = [1, 3, 4, 5, 6];

// // const newArr = arr.map( item => item * 2 );

// // console.log(newArr);

// // const teste = () => {
// //     return 'teste';
// // }

// // const retornaObjeto = () =>({ nome : 'Diego' });

// // console.log(teste());
// // console.log(retornaObjeto());

//VALORES PADRÃO PARA PARÂMETROS DE FUNÇÕES/ARROW FUNCTIONS

//AULA DESESTRUTURAÇÂO DE OBJETOS

// // const usuario = {
// //     nome: 'Diego',
// //     idade: 23,
// //     endereco: {
// //         cidade: 'Rio do Sul',
// //         estado: 'SC'
// //     }
// // };

// // //desestruturacação do objeto ES6+, maneira de acessar as informações de um objeto
// // const { nome, idade, endereco: {cidade} } = usuario;

// // console.log(nome, idade, cidade);

// // function mostraNome( { nome, idade } ){
// //     console.log(nome, idade);
// // }

// // mostraNome(usuario)

// AULA OPERADORES REST/SPREAD (é o operador que usa os tres pontos)
    //PRECISA INSTALAR UM NOVO PACOTE, PLUGINS DO BABEL
    // yarn add @babel/plugin-proposal-object-rest-spread
    //depois de instalar copia o @babel/plugin-proposal-object-rest-spread pro arquivo .babelrc

    //REST: Serve pra pegar o resto das propriedades
// // const usuario = {
// //     nome: 'Diego',
// //     idade: 23,
// //     empresa: 'Rocketseat'
// // };

// // const { nome, ...resto } = usuario;

// // console.log(nome);
// // console.log(resto);

// // const arr = [1, 2, 3, 4];

// // const [ a, b, ...c ] = arr;

// // console.log(a, b, c);

// // function soma(...params){
// //     return params.reduce((total, next) => total + next);
// // }

// // console.log(soma(1, 3));

// // //SPREAD: Ele propaga, repassa as informações de um array/objeto para outra estrutura de dados
// // //Exemplo1 SPREAD: Unindo dois arrays

// // const arr1 = [1, 2, 3];
// // const arr2 = [4, 5, 6];

// // const arr3 = [ ...arr1, ...arr2];

// // console.log(arr3);

// // //Exemplo2 SPREAD: Criando novo objeto trocando apenas algumas propriedades (nome no caso)

// // const usuario1 = {
// //     nome: 'Diego',
// //     idade: 23,
// //     empresa: 'Rocketseat'
// // };
// // //criou novo objeto, copiou as informações do outro, mas trocou o nome
// // const usuario2 = { ...usuario1, nome: 'Gabriel'};

// // console.log(usuario2);

//AULA TEMPLATE LITERALS: forma de incluir variaveis dentro de strings
// // const nome = "Diego";
// // const idade = 23;
// // //Template literals usa crase e o simbolo de dolar com chaves ${}
// // console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);

//AULA OBJECT SHORT SYNTAX: 
// // const nome = 'Diego';
// // const idade = 23;

// // //Quando o nome de uma variavel for equivalente ao nome de um atributo do objeto 
// // // você pode colocar apenas o nome da variavel

// // const usuario = {
// //     nome, 
// //     idade,
// //     empresa: 'Rocketseat'
// // };

// // console.log(usuario);


// AULA Webpack
// Forma de trabalhar com varios pastas/pacotes com codigos javascript e outros recursos
//O Babel so controla as depencias no ambiente de desenvolvimento, no ambiente de produção
//só vai estar o codigo transpilado ja com os arquivos necessarios, por isso renomeou pra devDependencias
    //Instala o webpack: yarn add webpack webpack-cli -D
    //Cria arquivo de configuracao pro webpack: webpack.config.js
    //Depois de configurar o webpack.config.js, instalar o babel-loader: yarn add babel-loader -D
    //Muda o script no package.json pra ao inves de executar o babel, executar o webpack:   "dev": "webpack --mode=development -w"

//AULA import/export
// // //export default (pra renomear precisa do 'as')
// // import { sub as subtracao} from './funcoes';

// // //export default (pode renomear a função)
// // //Um arquivo a ser importado pode ter apenas um export default, mas pode ter
// // //varios exports comuns, nesse caso a sintaxe ficaria: import somaFunction, { sub } from './soma';
// // //sendo somaFunction a default, e a sub um export comum
// // import somaFunction from './soma';

// // console.log(somaFunction(1, 2));
// // console.log(subtracao(1, 2));

//AULA Webpack dev server: pra organizar o diretorio de trabalho instala
//a dependencia usando: yarn add webpack-dev-server -D
//Altera o webpack pra apontar pro servidor onde vai buscar o arquivo inicial (devServer)
//Altera o script package.json: "dev": "webpack-dev-server --mode=development"
//O webpackdev no ambiente de desenvolvimento automaticamente gera o bundle.js e importa pro server, sem precisar criar o arquivo no diretorio do projeto
//No ambiente de produção deve executar o comando 'yarn build' (criar no script "build": "webpack --mode=production"), ai gera o bundle.js pra ser disponibilizado pra aplicação

//EXERCICIOS MODULO_02

// 1º exercício
// Crie um arquivo chamado functions.js com o seguinte conteúdo:
// // export const idade = 23;
// // export default class Usuario {
// //     static info() {
// //         console.log('Apenas teste');
// //     }
// // }

// 1.1
// Agora em seu arquivo principal import apenas a classe Usuario renomeando - a para ClasseUsuario
// e chame a função info();

// // import ClasseUsuario, { idade as IdadeUsuario} from './exercicios/modulo_02/functions';

// // ClasseUsuario.info();

// 1.2
// Em seu arquivo principal importe a variável de idade e exiba a mesma em tela;
// // console.log(idade);

// 1.3
// Em seu arquivo principal importe tanto a classe quanto a variável idade e renomeie a variável idade
// para IdadeUsuario.

// // console.log(IdadeUsuario);


//AULA ASYNC/AWAIT(o await é como se fosse o .then()) (incluido no ES8): Outra forma de trabalhar com programação assincrona
//     //Precisa instalar uma biblioteca nova para funcionar no babel, pois async/await é um recurso do ES8
//     //Instala a biblioteca da seguinte forma: yarn add @babel/plugin-transform-async-to-generator -D (precisa referenciar no babelrc)
//     // e também: yarn add @babel/polyfill -D (precisa referenciar no webpack)
// // const minhaPromise = () => new Promise ( (resolve, reject) => {
// //     setTimeout(() => { resolve('OK') }, 2000)
// // });

// // minhaPromise().then(response => instrucoes ).catch( response => instrucoes);

// // async function executaPromise(){
// //     //A declaração async torna a função automaticamente numa promise
// //     //sempre fica envolto de uma function, os awaits executam de forma sequencial
// //     // const response = await minhaPromise();
// //     console.log(await minhaPromise());
// //     console.log(await minhaPromise());
// // }

// // executaPromise().then( () => console.log('Terminou'));

// //Usanso Arrow funtion
// // const executaPromise = async () => {
// //     console.log(await minhaPromise());
// //     console.log(await minhaPromise());
// //     console.log(await minhaPromise());
// // };

// // executaPromise().then( () => console.log('Terminou'));

//AULA CONFIGURANDO AXIOS
//Adiciona a dependencia: yarn add axios (não é uma dependencia de desenvolvimento por isso está sem o -D)


// import axios from 'axios';

// class Api {
//     static async getUserInfo(username) {
//         try {
//             const response = await axios.get(`https://api.github.com/users/${username}`);
       
//             console.log(response);            
//         } catch(err) {
//             console.warn('Erro na API, usuário não existe!');
//         }
//     }
// }

// Api.getUserInfo('diego3g');
// Api.getUserInfo('diego3gasdawfvde');

//EXERCICIOS ASYNC/AWAIT
// Todos os exercícios abaixo necessitam que você esteja com o plugin do Async / Await do Babel e o
// babel - polyfill devidamente configurados.Em alguns exercícios é necessário instalar o Axios.
//     Exercício
// 1. Transforme os seguintes trechos de código utilizando async / await:

// 1.1 Função delay aciona o .then após 1s
// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

// async function umPorSegundo() {
//     await delay();
//     console.log('1s');

//     await delay();
//     console.log('2s');

//     await delay();
//     console.log('3s');
// }

// // const umPorSegundo = async () => {
// //     await delay();
// //     console.log('1s');

// //     await delay();
// //     console.log('2s');

// //     await delay();
// //     console.log('3s');
// // };

// umPorSegundo();

//1.2
// // import axios from 'axios';
// // //Função a ser convertida:
// // // function getUserFromGithub(user) {
// // //     axios.get(`https://api.github.com/users/${user}`)
// // //         .then(response => {
// // //             console.log(response.data);
// // //         })
// // //         .catch(err => {
// // //             console.log('Usuário não existe');
// // //         })
// // // }

// // // // Usando Arrow function 
// // // // const getUserFromGithub = async (user) => {
// // // //     try{
// // // //         const response = await axios.get(`https://api.github.com/users/${user}`);

// // // //         console.log(response.data);
// // // //     }catch(err){
// // // //         console.log('Usuário não existe');
// // // //     }
// // // // };

// // // Usando função
// // async function getUserFromGithub(user){
// //     try{
// //         const response = await axios.get(`https://api.github.com/users/${user}`);

// //         console.log(response.data);
// //     }catch(err){
// //         console.log('Usuário não existe');
// //     }
// // }

// // getUserFromGithub('diego3g');
// // getUserFromGithub('diego3g124123');


//1.3

// import axios from 'axios';

// //Classe a ser convertida
// // class Github {
// //     static getRepositories(repo) {
// //         axios.get(`https://api.github.com/repos/${repo}`)
// //             .then(response => {
// //                 console.log(response.data);
// //             })
// //             .catch(err => {
// //                 console.log('Repositório não existe');
// //             })
// //     }
// // }

// //classe convertida
// // // class Github{
// // //     static async getRepositories(repo){
// // //         try{
// // //             const response = await axios.get(`https://api.github.com/repos/${repo}`);

// // //             console.log(response.data);
// // //         }catch(err){
// // //             console.log('Repositório não existe');
// // //         }
// // //     }
// // // }

// // // Github.getRepositories('rocketseat/rocketseat.com.br');
// // // Github.getRepositories('rocketseat/dslkvmskv');
// // // Github.getRepositories('rocketseat/bootcamp-gostack-16');

//1.4

// // import axios from 'axios';

// // // enunciado:
// // // const buscaUsuario = usuario => {
// // //     axios.get(`https://api.github.com/users/${user}`)
// // //         .then(response => {
// // //             console.log(response.data);
// // //         })
// // //         .catch(err => {
// // //             console.log('Usuário não existe');
// // //         });
// // // }

// // // resolução:
// // const buscaUsuario = async (usuario) => {
// //     try{
// //         const response = await axios.get(`https://api.github.com/users/${usuario}`);

// //         console.log(response.data);
// //     }catch(err){
// //         console.log('Usuário não existe');
// //     }
// // };

import api from './api';

// // buscaUsuario('diego3g');
class App{
    constructor(){
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');
        this.inputEl = document.querySelector('input[name=repository');

        this.registerHandlers();
    }

    // Register the events of the app
    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository(event);

    }

    // Add a repository to the repositories list
    async addRepository(){
        event.preventDefault();

        const repoInput = this.inputEl.value;

        //check if the input has some text
        if(repoInput.length === 0)
            return;

        const response = await api.get(`/repos/${repoInput}`);

        const { name, description, html_url, owner: { avatar_url } } = response.data;

        this.repositories.push({
            name,
            description,
            avatar_url,
            html_url
        });

        this.clearInput();

        this.render();
    }

    // Clear the list of repositories and render the list again
    render(){
        this.clearList();

        //create and render the element on screen
        this.repositories.forEach(
            repo => {
                //create elements
                let imgEl = document.createElement('img');
                imgEl.setAttribute('src', repo.avatar_url);

                let titleEl = document.createElement('strong');
                titleEl.appendChild(document.createTextNode(repo.name));

                let descriptionEl = document.createElement('p');
                descriptionEl.appendChild(document.createTextNode(repo.description));

                let linkEl = document.createElement('a');
                linkEl.setAttribute('target', '_blank');
                linkEl.setAttribute('href', repo.html_url);
                linkEl.appendChild(document.createTextNode('Acessar'));

                let listItemEl = document.createElement('li');

                //render elements
                listItemEl.appendChild(imgEl);
                listItemEl.appendChild(titleEl);
                listItemEl.appendChild(descriptionEl);
                listItemEl.appendChild(linkEl);

                //add item in the list  
                this.listEl.appendChild(listItemEl);
            }
        );
    }

    // Clear the content of the element list repositories 
    clearList(){
        this.listEl.innerHTML = '';
    }

    // Clear the input content 
    clearInput() {
        this.inputEl.value = '';
    }
}

new App();