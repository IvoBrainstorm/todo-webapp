class AutheticationService{
    registerSuccessefullLogin(username, password){
        sessionStorage.setItem('autheticated', username)
    }

    logout(){
        sessionStorage.removeItem('autheticated')
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('autheticated')
        if(user===null) return false;
        return true
    }
}

export default new AutheticationService()