<template>
	<div class="col-sm-6 col-md-6 col-lg-4">
		<article class="card mb-4">
			<div class="card-top">
				<div class="card-top__left">
					<div class="card-top__sale" v-if='data.isDiscount'>Скидка</div>
					<div class="card-top__new" v-if='data.isNew'>Новинка</div>
				</div>
				<div class="card-top__right">
					<div
						v-if='data.isFavorites'
						@click.prevent="$store.dispatch('cart/favoriteToggle', data.id)"
						class="card-top__fav card-top__fav--active"
						title="Убрать из избранного"
					>
						<i class="fas fa-heart"></i>
					</div>
					<div
						v-else
						@click.prevent="$store.dispatch('cart/favoriteToggle', data.id)"
						class="card-top__fav"
						title="Добавить в избранное"
					>
						<i class="far fa-heart"></i>
					</div>
				</div>
			</div>
			<div class="product-img">
				<router-link :to='`/product/${data.id}`'>
					<img v-bind:src="data.src">
				</router-link>
			</div>
			<div class="card-body">
				<div class="card-price-wrapper">
					<template v-if="data.oldPrice === undefined">
						<div class="card-price-regular">
							{{ data.price }} <span>₽</span>
						</div>
					</template>

					<template v-else>
						<div class="card-price-new">
							{{ data.price }} <span>₽</span>
						</div>
						<div class="card-price-old">
							{{ data.oldPrice }} <span>₽</span>
						</div>
					</template>
				</div>
				<h4 class="item-title">
					<router-link :to='`/product/${data.id}`'>{{ data.title }}</router-link>
				</h4>
				<div class="card-buy" @click.prevent="add(data.id)">В корзину</div>
			</div>
		</article>
	</div>
</template>

<script>
import './style.css'
export default {
	props: ['data'],
	methods: {
		add (id) {
			this.$store.dispatch('cart/plus', id)
		}
	}
}
</script>