export function authHeader(){
    let user = JSON.parse(localStorage.getItem('user'));
    if(user && user.user.token){
         return { 'Authorization': 'Token ' + user.user.token };
    }else {
        return {}
    }
}