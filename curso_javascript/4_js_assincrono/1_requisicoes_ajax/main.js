//starting a new ajax request
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/tukno');

xhr.send(null);


//When the request gets the response from githubs api
xhr.onreadystatechange = function (){
    if(xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText));
    }
}
