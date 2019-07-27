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

    if (!isEmptyString(userName)) {
        //Generate the loading message while the promise is fetching data from the github API
        renderLoadingResult();

        var urlUserRepos = ' https://api.github.com/users/' + userName + '/repos';
        //fetch a user repositories from github API
        axios.get(urlUserRepos)
            .then(function(response){
                //handle success (axios returns a JSON object)
                renderRepoList(response.data);
            })
            .catch(function(){
                //handle error
                renderUserDoesNotExist();
            });        
    }
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

//Checks if the string is empty (only made of spaces or empty(""))
function isEmptyString(text){
    if(text !== null && text !== undefined){
        return /^\s*$/.test(text);
    }else{
        //else it is an invalid input (string)
        return false;
    }
}