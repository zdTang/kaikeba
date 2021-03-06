/* eslint-disable no-console */
import RouterLink from "./router-link-ivew"
import RouterView from "./router-view-ivew"
let Vue;

// 1.实现一个插件  挂载$router
class VueRouter {
    constructor (options) {
        this.$options = options
        // 缓存建立路由映射表
        let routes = options.routes
        this.hasMap = new Map()

        this.mapDate.call(this, routes)
        // obj: Object,
        // key: string,
        // val: any,
        // customSetter ? : ? Function,
        // shallow ? : boolean
        console.log(this.hasMap)
        console.log(window.location.hash)
        if (window.location.hash) {
            let a = window.location.hash.slice(1) || '';
            console.log(a)
            if (!a) {
                a = routes[0].redirect
            }
            Vue.util.defineReactive(this, 'current', a)
        } else {
            window.location.replace('/#/')
            Vue.util.defineReactive(this, 'current')
        }
        
        
        window.addEventListener('load', this.onHashChange.bind(this))
        window.addEventListener('hashchange', this.onHashChange.bind(this))
        
    }
    onHashChange() {
        console.log(window.location.hash)
        let hash = window.location.hash
        this.current = hash ? hash.slice(1) : ''
    }
    // 递归处理map映射表
    mapDate(arr) {
        arr.map( item => {
            if (item.name) {
                this.hasMap[item.name] = item
            } else {
                this.hasMap[item.path] = item
            }
            if (item.children) {
                return this.mapDate(item.children)
            }
        })
        console.log(this.hasMap)
    }
}
VueRouter.install = function (_Vue) {
    // 保存构造函数，在VueRouter 里面使用
    Vue = _Vue
    Vue.mixin({
        beforeCreate () {
            if (this.$options.router) {
                Vue.prototype.$router = this.$options.router
            }
            
        }
    })
    Vue.component('routerLink', RouterLink)
    Vue.component('routerView', RouterView)
}
export default VueRouter