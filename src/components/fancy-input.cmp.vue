<template>
	<div>
		<input
			ref="input"
			:type="type"
			@input="updateText($event.target.value)"
			@focus="isInFocus = true"
			@blur="isInFocus = false"
			v-model="text"
			:disabled="disabled"
		/>
		<label :class="{ onTop: isLabelOnTop }">{{ placeholder }}</label>
	</div>
</template>

<script>
export default {
	props: {
		'value': String,
		'placeholder': String,
		'type': String,
		'disabled': {
			type: Boolean,
			default: false
		}
	},

	data() {
		return {
			isInFocus: false,
			text: this.value
		}
	},
	computed: {
		isLabelOnTop() {
			return this.isInFocus || this.text;
		}
	},
	methods: {
		updateText(text) {
			return this.$emit('input', text);
		}
	}
}
</script>

<style lang="scss" scoped>
div {
	position: relative;
	input.disabled {
		background-color: inherit;
		color: inherit;
	}
	label {
		position: absolute;
		right: 0;
		top: 0;
		transition: top 0.1s, font-size 0.1s, font-weight 0.1s;
		pointer-events: none;
		&.onTop {
			top: -1.1em;
			font-size: 0.8em;
			font-weight: bold;
		}
	}
}
</style>