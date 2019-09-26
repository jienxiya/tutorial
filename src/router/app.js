export default {
    routes: [{
        path: '/login',
        name: 'login',
        component: resolve => require(['modules/basic/Login.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    }, {
        path: '/register',
        name: 'register',
        component: resolve => require(['modules/basic/Register.vue'], resolve),
        meta: {
            tokenRequired: false
        }

    }, {
        path: '/dashboard',
        name: 'dashboard',
        component: resolve => require(['modules/basic/Dashboard.vue'], resolve),
        meta: {
            tokenRequired: true
        }
    }

    ]
}