// Promise é um objeto usado para processamento assíncrono.
// Um Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.

var minhaPromise = function(){
    return new Promise(function(resolve, reject){
        //resolve: used when the result is a success
        //reject: used the result is not a success
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/tukno');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                //Verifico se a requisição obteve sucesso, usando o codigo http (200 no caso)
                if(xhr.status === 200){
                    //Caso obtenha sucesso aciono o resolve da Promise
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    //Caso não obtenha sucesso, aciono o reject da Promise
                    reject('Erro na requisição');
                }
            }
        }
    });
}

//Processing the result of the promise on the result of the resolve or reject
//when the resolve method is executed, it invokes the .then()
//when the catch method is executed, it invokes the .catch()
minhaPromise()
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });