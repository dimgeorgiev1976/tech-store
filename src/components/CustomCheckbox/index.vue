<template>
	<li class="nav__element" @click="$emit('update:isActive', !isActive)">
		<a href="#!" class="nav__link" :class="classObject_a">
			<i class="fas" :class="classObject_i"></i>
			<slot>NoName</slot>
		</a>
	</li>
</template>

<script>
export default {
	props: ['isActive'],
	computed: {
		classObject_a () {
			return {
				'nav__link--active': this.isActive
			}
		},
		classObject_i () {
			return {
				'fa-check-square': this.isActive,
				'fa-square': !this.isActive
			}
		}
	}
}
</script>