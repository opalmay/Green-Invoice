<template>
	<div class="tab-group">
		<ul>
			<li
				v-for="tab in tabs"
				:key="tab.key"
				:class="{ selected: tab.key === selectedTab }"
			>
				<input :id="tab.key" type="radio" @click="changeTab(tab.key)" />
				<label :for="tab.key"
					><div>{{ tab.label }}</div></label
				>
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
			'selectedTab': this.tabs[0].key
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
	&.selected {
		color: #18c746;
		border-bottom: 2px solid #18c746;
	}
}
label {
	text-align: center;
	cursor: pointer;
	display: block;
	width: 100%;
	height: 100%;
	div {
		padding: 15px 10px;
	}
}
input {
	display: none;
}
</style>