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
        path: '/sidebar',
        name: 'sidebar',
        component: resolve => require(['components/frame/sidebar.vue'], resolve),
        meta: {
            tokenRequired: true
        }
    }

    ]
}