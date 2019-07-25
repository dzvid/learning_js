//axios: library used to make async requests (its a wrapper to the XMLHttpRequest)
axios.get('https://api.github.com/users/tukno')
    .then(function(response){
        console.log(response.data.avatar_url);
    })
    .catch(function(error){
        console.warn(error);
    });