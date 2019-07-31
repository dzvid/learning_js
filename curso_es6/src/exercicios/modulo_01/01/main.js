// 1º exercício
// 1.1 Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve
// extender uma segunda classe chamada "Usuario".
// 1.2 A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los
// em propriedades da classe. 
// 1.3 A classe "Admin" por sua vez não recebe parâmetros mas deve
// repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como
// true na classe.
// Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que
// retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não.

class Usuario{

    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }

    verificaAdmin(){
        return this.isAdmin === true;
    }

}

class Admin extends Usuario{

    constructor(email, senha){
        super(email, senha);

        this.isAdmin = true;
    }
}


const usuario = new Usuario('fakediego', 'rocketseat123');
const admin = new Admin('diego', 'rocketseat123');

console.log(usuario.verificaAdmin());
console.log(usuario);
console.log(admin.verificaAdmin());
console.log(admin);