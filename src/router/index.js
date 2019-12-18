import Vue from "vue"
import Router from "vue-router"
import Home from "@/Home.vue"
import Cart from "@/components/contents/Cart.vue"

import Calculator from "@/components/contents/Calculator.vue"
import Seqsum from "@/components/contents/Seqsum.vue"
import Account from "@/components/contents/Account.vue"
import Todo2 from "@/components/contents/Todo2.vue"

Vue.use(Router)
export default new Router({
	mode: 'history',
	routes : [
		{path: '/', name : 'home', component: Home},
		{path: '/cart', name: 'cart', component: Cart},
		{path: '/calculator', name: 'calculator', component: Calculator},
		{path: '/seqsum', name: 'seqsum', component: Seqsum},
		{path: '/account', name: 'account', component: Account},
		{path: '/todo2', name: 'todo2', component: Todo2}
	]	
})