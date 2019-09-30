import ROUTER from 'router';

export default {
    user: null,
    registeredUser: [],
    courses: [],
    setUser(user) {
        this.user = user
    },
    getUser(user) {
        return this.user = user;
    },
    register(username, password) {
        this.registeredUser.push({
            username: username,
            password: password,
        })

        // var p = JSON.parse(JSON.stringify(this.registeredUser))
        // alert (p)
        // console.log(p)
        ROUTER.push('/login')
    },
    login(username, password) {
        for (let i = 0; i < this.registeredUser.length; i++) {
            if (this.registeredUser[i].username === username && this.registeredUser[i].password === password) {
                ROUTER.push('/dashboard')
                return this.registeredUser[i]
            } else {
                alert("Email or Password is incorrect!")
            }
        }
        return null
    },
    logout() {
        this.user = null
        ROUTER.push('/login')
    },
    addCourse(course, year) {
        this.courses.push({
            course: course,
            year: year,
        });
            var p = JSON.parse(JSON.stringify(this.courses))
            console.log(p)
    },
    getCourse(kurso) {
        for (let i = 0; i < this.courses.length - 1; i++) {
            // var p = JSON.parse(JSON.stringify(this.courses[i]))
            console.log(kurso)
            return kurso = i
            ;
        }

    },
    editProfile() {
        ROUTER.push('/edit')
    }
}