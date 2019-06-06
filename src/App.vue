<template>
	<div>
		<!-- white-plate -->
		<div class="white-plate">
			<div class="container-fluid">
				<!-- header -->
				<main-header/>
				<!-- // header -->
				<div class="line-between"/>
				<!-- content block -->
				 <router-view/>
				<!-- content block -->
			</div>
		</div>
		<!-- // white-plate -->
		<div class="copyright">
			<p>
				Сделал John Doe, на курсе
				<a href="http://webcademy.ru" target="_blank">WebCademy.ru</a>
			</p>
		</div>
	</div>
</template>

<script>
import MainHeader from '@/components/MainHeader/index'
	export default {
		components: {
			MainHeader
		}
	}

</script>
