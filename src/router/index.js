import Vue from 'vue'
import Router from 'vue-router'
import ModuleRoutes from 'router/module_route'
// global.$ = global.jquery
 Vue.use(Router)
 export default new Router({
     routes: ModuleRoutes.routes
 })