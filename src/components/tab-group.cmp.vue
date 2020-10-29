<template>
	<div class="tab-group">
		<ul>
			<li
				v-for="tab in tabs"
				:key="tab.key"
				:class="{ selected: tab.key === selectedTab }"
				@click="changeTab(tab.key)"
			>
				<div>{{ tab.label }}</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		'tabs': Array[Object],
	},
	data() {
		return {
			selectedTab: this.tabs[0].key
		}
	},
	methods: {
		changeTab(key) {
			this.selectedTab = key;
			this.$emit('input', key);
		}
	}
}
</script>

<style lang="scss" scoped>
.tab-group {
	border-bottom: 1px solid #eeeeee;
}
ul {
	list-style-type: none;
	cursor: pointer;
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: space-around;
	width: 100%;
}
li {
	flex-grow: 1;
	transition: color 0.2s;
	text-align: center;
	cursor: pointer;
	display: block;
	width: 100%;
	height: 100%;
	&.selected {
		color: #18c746;
		border-bottom: 2px solid #18c746;
	}
	div {
		padding: 15px 10px;
	}
}
</style>