<template>
	<div id="app">
				<section class="site-container">
		<appHeader />
			<router-view />
		</section>
	</div>
</template>
<script>
import appHeader from '@/components/app-header.cmp.vue'
export default {
	components: {
		appHeader
	}
}
</script>