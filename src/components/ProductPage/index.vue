<template>
	<div class="row">

		<div class="product-title-wrapper">

			<div class="product-title">{{ product.title }}</div>

			<div class="product-top-fav" title="Добавить в избранное">
				<i class="far fa-heart"></i>
			</div>

			<!-- <div class="product-top-fav product-top-fav--active" title="Убрать из избранного">
			<i class="fas fa-heart"></i>
		</div> -->

		</div>

		<div class="row">
			<div class="col-6">
				<img :src="product.src" alt="">
			</div>
			<div class="col-6">
				<div class="product-price">
					{{ product.price }} руб
					<span class="product-price-old" v-if='product.oldPrice'>
						{{ product.oldPrice }} руб
					</span>
				</div>
				<a href="cart.html" class="product-btn-order" @click.prevent="$store.dispatch('cart/plus', id)">В корзину</a>
				<div class="product-desc">
					{{ product.description }}
				</div>

			</div>
		</div>

	</div>
</template>

<script>
export default {
	computed: {
		id () {
			return parseInt(this.$route.params.id)
		},
		product () {
			for (const item of this.$store.state.products.list) {
				if (item.id === this.id) {
					return item
				}
			}
			return {}
		}
	}
}
</script>