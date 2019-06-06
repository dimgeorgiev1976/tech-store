<template>
	<div class="col-sm-6 col-md-6 col-lg-4">
		<article class="card mb-4">
			<div class="card-top">
				<div class="card-top__left">
					<div class="card-top__sale" v-if='isDiscount'>Скидка</div>
					<div class="card-top__new" v-if='isNew'>Новинка</div>
				</div>
				<div class="card-top__right">
					<div class="card-top__fav" title="Добавить в избранное" v-if='isFavorites === undefined'>
						<i class="far fa-heart"></i>
					</div>
					<div class="card-top__fav card-top__fav--active" title="Убрать из избранного" v-else>
						<i class="fas fa-heart"></i>
					</div>
				</div>
			</div>
			<div class="product-img">
				<img v-bind:src="src">
			</div>
			<div class="card-body">
				<div class="card-price-wrapper">
					<template v-if="oldPrice === undefined">
						<div class="card-price-regular">
							{{ price }} <span>₽</span>
						</div>
					</template>

					<template v-else>
						<div class="card-price-new">
							{{ price }} <span>₽</span>
						</div>
						<div class="card-price-old">
							{{ oldPrice }} <span>₽</span>
						</div>
					</template>
				</div>
				<h4 class="item-title">
					<router-link :to="`/product/${id}`">{{ title }} </router-link>
				</h4>
				<router-link to='/cart'>
					<div class="card-buy">В корзину</div>
				</router-link>
			</div>
		</article>
	</div>
</template>

<script>
import './style.css'

export default {
	props: ['price', 'oldPrice', 'isNew', 'isDiscount', 'isFavorites', 'src', 'title', 'id'],
	name: 'goodCard'
}
</script>