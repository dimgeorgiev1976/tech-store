<template>
	<div class="header">
		<div class="row">
			<div class="col-sm-6">
				<!-- <a href="index.html" class="site-logo">
					<span>техно</span>Store
				</a> -->
				<router-link to='/' class="site-logo">
					<span>техно</span>Store
				</router-link>
			</div>
			<div class="col-sm-6 d-flex justify-content-end">
				<div class="fav-list-wrapper" @click="$router.push({ path: '/', query: { favoriteMode: true } })">
					<div class="fav-list__button">
						<i class="far fa-heart"></i> Избранное
					</div>
					<div class="list-dropdown">
					</div>
				</div>
				<!-- <button v-on:click='sort()'>Сортировать</button>
				<button v-on:click='update()'>Обновить данные</button> -->
				<div class="cart-list-wrapper">
					<router-link to='/cart'>
						<div class="cart-list__button">
							<i class="fas fa-shopping-cart"></i>
							Корзина
							<span class="cart-btn-badge" v-if='totalCount'>{{ totalCount }}</span>
						</div>
					</router-link>
					<div class="list-dropdown">
						<div class="dropdown-cart-btn">
							<a href="cart.html" class="btn btn-warning">Перейти в корзину</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	computed: {
		...mapGetters({
			totalCount: 'cart/totalCount'
		})
	},
	methods: {
		sort () {
			this.$store.dispatch('sort')
		},
		update () {
			this.$store.dispatch('update')
		}
	}
}
</script>