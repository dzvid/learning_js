//3.1 A partir do resultado do exercicio 2, adicione um indicador de carregamento em tela no lugar
// da lista apenas enquanto a requisição estiver acontecendo:
// 3.2 Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.

//Get reference to the elements
var MSG_USER_DOES_NOT_EXIST = 'Erro: O usuário não existe no Github :(';
var MSG_LOADING = 'Carregando...';
var inputUserElement = document.querySelector('#app input');
var buttonSearch = document.querySelector('#app button');
var listResultsElement = document.querySelector('#app #searchResult ul');

buttonSearch.onclick = searchForUser;

// onclick handler to search for a user
function searchForUser() {

    //get the github username text from input
    var userName = inputUserElement.value;

    if (userName) {
        //Generate the loading message while the promise is fetching data from the github API
        renderLoadingResult();

        //promise to fetch a user repositories from github API
        promiseContactAPI(userName)
            .then(function (response) {
                //convert the response to JSON and calls the renderRepoList
                renderRepoList(response);
            })
            .catch(function () {
                renderUserDoesNotExist();
            });
    }
}

function promiseContactAPI(userName) {
    //Get the username and Send a request to github API
    return new Promise(function (resolve, reject) {
        //generate the url to request
        var urlUserRepos = ' https://api.github.com/users/' + userName + '/repos';

        //generate an ajax request
        var xhr = new XMLHttpRequest();
        xhr.open('GET', urlUserRepos);
        xhr.send(null);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                //verify if the request was sucessful or not
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else if (xhr.status === 404) {
                    reject();
                } else {
                    console.log('Error: ' + xhr.status);
                }
            }
        }
    });
}

//Set the user repos in the listElement
function renderRepoList(userRepoList) {
    //clear the list 
    clearList();

    for (repo of userRepoList) {
        renderListElement(repo.name);
    }
}

function renderListElement(text) {
    //create new li and text node, set text for the li and add to the list
    var liElement = document.createElement('li');
    var textElement = document.createTextNode(text);

    liElement.appendChild(textElement);
    listResultsElement.appendChild(liElement);
}

function renderUserDoesNotExist() {
    //clear the list 
    clearList();

    renderListElement(MSG_USER_DOES_NOT_EXIST);
}

function renderLoadingResult() {
    //clear the list 
    clearList();

    renderListElement(MSG_LOADING);
}

function clearList() {
    //clear the list 
    listResultsElement.innerHTML = '';
}