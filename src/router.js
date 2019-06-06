import Vue from 'vue'
import Router from 'vue-router'

import ProductPage from '@/components/ProductPage/index'
import CartPage from '@/components/CartPage/index'
import MainPage from '@/components/MainPage/index'

Vue.use(Router)

const router = new Router({
	mode: 'history',

	routes: [
		{
			path: '/',
			component: MainPage
		},
		{
			path: '/index',
			component: MainPage
		},
		{
			path: '/product/:id',
			component: ProductPage
		},
				{
			path: '/cart',
			component: CartPage
		}
	]
})

export default router

