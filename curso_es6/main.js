// Pra iniciar o ambiente de um projeto para web
// yarn init
// yarn add @babel/cli
// yarn add @babel/preset-env
// yarn add @babel/core
//Pra usar rest/spread  (é o operador que usa os tres pontos)
// yarn add @babel/plugin-proposal-object-rest-spread

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