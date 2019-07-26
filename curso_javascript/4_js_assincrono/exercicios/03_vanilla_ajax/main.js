//3.1 A partir do resultado do exercicio 2, adicione um indicador de carregamento em tela no lugar
// da lista apenas enquanto a requisição estiver acontecendo:
// 3.2 Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.

//Get reference to the elements
var inputUserElement = document.querySelector('#app input');
var buttonSearch = document.querySelector('#app button');
var listResultsElement = document.querySelector('#app #searchResult ul');

buttonSearch.onclick = searchForUser;

// onclick handler to search for a user
function searchForUser(){

    //clear the list 
    listResultsElement.innerHTML = '';

    //get the github username text from input
    var userName = inputUserElement.value;

    if(userName){
        promiseContactAPI(userName)
        .then(function(response){
            //convert the response to JSON and calls the renderRepoList
            renderRepoList(response);
        })
        .catch(function(response){
            console.log(response);
        });
    }
}

function promiseContactAPI(userName){
    //Get the username and Send a request to github API
    return new Promise(function(resolve, reject){
        //generate the url to request
        var urlUserRepos = ' https://api.github.com/users/' + userName + '/repos';
        
        //generate an ajax request
        var xhr = new XMLHttpRequest();
        xhr.open('GET', urlUserRepos);
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                //verify if the request was sucessful or not
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('Erro na requisição');
                }
            }
        }
    });
}

//Set the user repos in the listElement
function renderRepoList(userRepoList){
    for (repo of userRepoList){
        //create new li and text node, set repo text and add to the list
        var liElement = document.createElement('li');
        var textElement = document.createTextNode(repo.name);

        liElement.appendChild(textElement);
        listResultsElement.appendChild(liElement);
    }
}