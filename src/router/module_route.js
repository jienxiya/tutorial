// import AUTH from '../services/auth'
let beforeEnter = (to, from, next) => 
{
    // AUTH.currentPath = to.path
    // if(to.tokenRequired == true){
    //     token = session.getItem("token")
        
    // }
    next()
}
var devRoutes = [];
let app = require('router/app.js')
devRoutes = devRoutes.concat(app.default.routes)
for (let x = 0; x < devRoutes.length; x++) {
    devRoutes[x]['beforeEnter'] = beforeEnter
}

//default route
let routes = [
    {
        path: '/',
        name: 'home',
        component: resolve => require(['modules/basic/Login.vue'], resolve),
        beforeEnter: beforeEnter
    }
]
routes = routes.concat(devRoutes)
export default {
    routes: routes
}

