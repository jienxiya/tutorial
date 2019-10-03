import ROUTER from 'router';

export default {
    user: null,
    registeredUser: [],
    courses: [],
    setUser(user) {
        this.user = user
    },

    register(email, password) {
        this.registeredUser.push({
            email: email,
            password: password
        })
        // var p = JSON.parse(JSON.stringify(this.registeredUser))
        // console.log(p)
        ROUTER.push('/login')
    },
    login(email, password) {
        for (let i = 0; i < this.registeredUser.length; i++) {
            if (this.registeredUser[i].email === email && this.registeredUser[i].password === password) {
                ROUTER.push('/dashboard')
                this.setUser(email)
                return this.registeredUser[i]
            } else {
                alert("Email or Password is incorrect!")
            }
        }
        return null
    },
    logout() {
        this.user = null
        // sessionStorage.setItem("Username", null)
        // sessionStorage.setItem("Email", null)
        // sessionStorage.setItem("Password", null)
        ROUTER.push('/login')
    },
    addCourse(course, year, schedule, room, teacher) {
        this.courses.push({
            course: course,
            year: year,
            schedule: schedule,
            room: room,
            teacher: teacher,
        });
        // var p = JSON.parse(JSON.stringify(this.courses))
        // console.log(p)
    },
    save(username, email, password) {
        for (let i = 0; i < this.registeredUser.length; i++) {
            this.registeredUser[i].username = username,
                this.registeredUser[i].email = email,
                this.registeredUser[i].password = password
        }
        alert('Update Succesfully!')
        // var p = JSON.parse(JSON.stringify(this.registeredUser))
        // console.log(p)
        ROUTER.push('/personalInformation')
    },
    // removeCourse(course, year, schedule, room, teacher){

    // }

}