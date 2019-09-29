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
    }, {
        path: '/personalinformation',
        name: 'personalinformation',
        component: resolve => require(['modules/basic/PersonalInfo.vue'], resolve),
        meta: {
            tokenRequired: true
        }
    }, {
        path: '/courses',
        name: 'courses',
        component: resolve => require(['modules/basic/course.vue'], resolve),
        meta: {
            tokenRequired: true
        }
    }

    ]
}