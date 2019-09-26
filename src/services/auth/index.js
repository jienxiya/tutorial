import ROUTER from 'router';

export default {
    user: null,
    registeredUser: [],
    setUser(user){
        this.user = user
    },
    register(username, password){
        this.registeredUser.push({
            username: username,
            password: password
        })
    },
    login(username,password){
        for(let i = 0; i < this.registeredUser.length; i++){
            if(this.registeredUser[i].username === username && this.registeredUser[i].password === password){
                return this.registeredUser[i]
            }
        }
        return null
    },
    logout(){
        this.user = null
        ROUTER.push('/login')
    }
}