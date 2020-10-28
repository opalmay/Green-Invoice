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
	metaInfo: {
		titleTemplate: 'חשבונית ירוקה - %s'
	},
	components: {
		appHeader
	}
}
</script>