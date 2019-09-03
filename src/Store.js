

function user(){
    return JSON.parse(localStorage.getItem('user')).user.user 
}

function token(){
    return JSON.parse(localStorage.getItem('user')).user.access_token
}

export {
    user, token
}